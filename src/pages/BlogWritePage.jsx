import React, { useState, useRef } from 'react';
import './BlogWritePage.css';
import {  firestore , storage } from '../firebase/firebase';
import { getDownloadURL } from "firebase/storage";
import { ref as ref_storage, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import uniqid from 'uniqid';

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
    const fileRef = useRef(null);

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
                setImageFile(e.target.files[0]);
            };
        }
        else {
            setImgError(true);
            return;
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const filePath = `assets/${imageFile.name}`;
            const folderRef = ref_storage(storage, filePath);
            const uploadedFile = uploadBytesResumable(folderRef, imageFile);
            uploadedFile.on(
                "state_changed",
                (snapshot) => {

                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    try {
                        const downloadUrl = await getDownloadURL(uploadedFile.snapshot.ref);
                        await addDoc(collection(firestore, "blogs"), {
                            id: uniqid(),
                            heading: formData.heading,
                            author: formData.author,
                            description: formData.description,
                            category: formData.category,
                            date: new Date(),
                            timestamp: serverTimestamp(),
                            image: downloadUrl,
                            comments: []
                        });
                        setFormData({
                            heading: '',
                            author: '',
                            description: '',
                            category: ''
                        });
                        setImageFile(null);
                        setImgError(false); // Reset imgError state
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
    };

    return (
        <div className="form-container">
            <h2>Create a New Post</h2>
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
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
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
                    <label htmlFor="imageFile">Upload Image:</label>
                    <input
                        type="file"
                        id="imageFile"
                        name="imageFile"
                        src={imageFile}
                        accept="image/jpeg, image/png"
                        ref={fileRef}
                        onChange={handleImageChange}
                        required
                    />
                    <h6 className="imgError"> {imgError && "Sorry, only jpg/jpeg/png/jfif images are allowed"} </h6>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BlogWritePage;
