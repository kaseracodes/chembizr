import React, { useState, useRef } from 'react';
import './BlogWritePage.css';
import { firestore, storage } from '../firebase/firebase';
import { getDownloadURL } from "firebase/storage";
import { ref as ref_storage, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import uniqid from 'uniqid';
import JoditEditor from 'jodit-react';

const BlogWritePage = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        heading: '',
        author: '',
        description: '',
        category: '',
    });

    const [imageFile, setImageFile] = useState(null);
    const [imgError, setImgError] = useState(false);
    const [bgimgError, setBgImgError] = useState(false);
    const [content, SetContent] = useState('');
    const [firebaseImageUrl, SetFirebaseImageUrl] = useState('');
    const [bgimageFile, SetBgImageFile] = useState(null);
    const fileRef = useRef(null);
    const bgfileRef = useRef(null);
    const editor = useRef(null);


    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle image file selection
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0] && e.target.files[0].name) {
            const fileName = e.target.files[0].name;
            const fileTypeArray = fileName.split(".");
            const fileMimeType = fileTypeArray[fileTypeArray.length - 1];
            if (fileMimeType === "JPG" || fileMimeType === "jpg" || fileMimeType === "PNG" || fileMimeType === "png" || fileMimeType === "jfif" || fileMimeType === "JFIF" || fileMimeType === "JPEG" || fileMimeType === "jpeg") {
                setImgError(false);
                const reader = new FileReader();
                if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0]);
                }
                reader.onload = (readerEvent) => {
                    const uploadedFile = e.target.files[0];
                    setImageFile(uploadedFile);
                    console.log(uploadedFile); // Log uploadedFile directly
                };
            } else {
                setImgError(true);
                return;
            }
        }
    };

    // Function to handle background image file selection
    const handleBgImageChange = (e) => {
        if (e.target.files && e.target.files[0] && e.target.files[0].name) {
            const fileName = e.target.files[0].name;
            const fileTypeArray = fileName.split(".");
            const fileMimeType = fileTypeArray[fileTypeArray.length - 1];
            if (fileMimeType === "JPG" || fileMimeType === "jpg" || fileMimeType === "PNG" || fileMimeType === "png" || fileMimeType === "jfif" || fileMimeType === "JFIF" || fileMimeType === "JPEG" || fileMimeType === "jpeg") {
                setBgImgError(false);
                const reader = new FileReader();
                if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0]);
                }
                reader.onload = (readerEvent) => {
                    const uploadedFile = e.target.files[0];
                    SetBgImageFile(uploadedFile);
                    console.log(uploadedFile); // Log uploadedFile directly
                };
            } else {
                setBgImgError(true);
                return;
            }
        }
    };


    const handleURLFetchSubmit = async (e) => {
        e.preventDefault();

        // Check if imageFile is null (no image selected)
        if (!imageFile) {
            setImgError(true);
            return; // Exit function early since no image is selected
        }

        // If image is selected, proceed with image upload
        try {
            const filePath = `assets/${imageFile.name}`;
            const folderRef = ref_storage(storage, filePath);
            const uploadedFile = uploadBytesResumable(folderRef, imageFile);
            uploadedFile.on(
                "state_changed",
                (snapshot) => {
                    // Progress tracking if needed
                    console.log('snapshot: ', snapshot);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    try {
                        const downloadUrl = await getDownloadURL(uploadedFile.snapshot.ref);
                        console.log(downloadUrl);
                        SetFirebaseImageUrl(downloadUrl);
                        setImgError(false);
                    } catch (error) {
                        console.error("Error getting download URL:", error);
                    }
                }
            );
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const filePath = `assets/${bgimageFile.name}`;
            const folderRef = ref_storage(storage, filePath);
            const uploadedFile = uploadBytesResumable(folderRef, bgimageFile);
            uploadedFile.on(
                "state_changed",
                (snapshot) => {
                    // Progress tracking if needed
                    console.log('snapshot: ', snapshot);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    try {
                        const downloadUrl = await getDownloadURL(uploadedFile.snapshot.ref);
                        console.log(downloadUrl);
                        await addDoc(collection(firestore, "blogs"), {
                            id: uniqid(),
                            heading: formData.heading,
                            author: formData.author,
                            description: content,
                            category: formData.category,
                            date: new Date(),
                            image: downloadUrl,
                            timestamp: serverTimestamp(),
                            comments: []
                        });
                        // Reset form data
                        setFormData({
                            heading: '',
                            author: '',
                            description: '',
                            category: ''
                        });
                        // Reset imageFile and imgError states
                        setImageFile(null);
                        SetContent('');
                        setBgImgError(false);
                        fileRef.current.value = '';
                        bgfileRef.current.value = '';
                        setImgError(false);
                    }
                    catch (error) {
                        console.error("Error getting download URL:", error);
                    }
                }
            );
        }
        catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    return (
        <div className="form-container">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="heading">Heading:</label>
                    <input
                        type="text"
                        id="heading"
                        name="heading"
                        value={formData.heading}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <JoditEditor
                        id="description"
                        name="description"
                        ref={editor}
                        value={content}
                        onChange={newContent => {
                            SetContent(newContent)
                            console.log(newContent)
                        }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imageFile">Upload Image from device to generate URL:</label>
                    <input
                        type="file"
                        id="imageFile"
                        name="imageFile"
                        src={imageFile}
                        accept="image/jpeg, image/png"
                        ref={fileRef}
                        onChange={handleImageChange}
                    />
                    {imageFile && (
                        <div>
                            <input type="text" value={firebaseImageUrl} readOnly />
                            <button onClick={handleURLFetchSubmit} type="button">Fetch URL</button>
                        </div>
                    )}

                    <h6 className="imgError"> {imgError && "Sorry, only jpg/jpeg/png/jfif images are allowed"} </h6>

                </div>
                <div className="form-group">
                    <label htmlFor="bgimageFile">Upload Blog Banner Image:</label>
                    <input
                        type="file"
                        id="bgimageFile"
                        name="bgimageFile"
                        src={bgimageFile}
                        accept="image/jpeg, image/png"
                        ref={bgfileRef}
                        onChange={handleBgImageChange}
                        required
                    />
                     <h6 className="imgError"> {bgimgError && "Sorry, only jpg/jpeg/png/jfif images are allowed"} </h6>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BlogWritePage;
