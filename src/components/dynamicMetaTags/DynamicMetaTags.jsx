import React, { useEffect } from 'react';
import { useMetaTags } from '../../hooks/useMetaTags';
import { useLocation } from 'react-router-dom';

const DynamicMetaTags = ({ 
    defaultTitle = "ChemBizR - Chemical Business Solutions",
    defaultDescription = "Your trusted partner in chemical business solutions and industry insights.",
    defaultKeywords = "chemical, business, industry, solutions, chembizr",
    defaultImage = "/images/default-og-image.jpg"
}) => {
    const location = useLocation();
    const { metaTags, loading } = useMetaTags(location.pathname);

    useEffect(() => {
        if (loading) return;

        // Use meta tags from database or fallback to defaults
        const title = metaTags?.metaTitle || defaultTitle;
        const description = metaTags?.metaDescription || defaultDescription;
        const keywords = metaTags?.metaKeywords || defaultKeywords;
        const ogTitle = metaTags?.ogTitle || title;
        const ogDescription = metaTags?.ogDescription || description;
        const ogImage = metaTags?.ogImage || defaultImage;
        const twitterTitle = metaTags?.twitterTitle || title;
        const twitterDescription = metaTags?.twitterDescription || description;
        const twitterImage = metaTags?.twitterImage || ogImage;
        const canonicalUrl = metaTags?.canonicalUrl || `${window.location.origin}${location.pathname}`;
        const robots = metaTags?.robots || 'index, follow';

        // Set document title
        document.title = title;

        // Helper function to set or update meta tags
        const setMetaTag = (name, content, property = false) => {
            if (!content) return;
            
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let tag = document.querySelector(selector);
            
            if (tag) {
                tag.setAttribute('content', content);
            } else {
                tag = document.createElement('meta');
                if (property) {
                    tag.setAttribute('property', name);
                } else {
                    tag.setAttribute('name', name);
                }
                tag.setAttribute('content', content);
                document.head.appendChild(tag);
            }
        };

        // Set canonical link
        const setCanonicalLink = (url) => {
            let link = document.querySelector('link[rel="canonical"]');
            if (link) {
                link.setAttribute('href', url);
            } else {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                link.setAttribute('href', url);
                document.head.appendChild(link);
            }
        };

        // Remove existing meta tags to avoid duplicates
        const removeExistingMeta = (selector) => {
            const existing = document.querySelectorAll(selector);
            existing.forEach(tag => tag.remove());
        };

        // Clean up existing meta tags
        removeExistingMeta('meta[name="description"]');
        removeExistingMeta('meta[name="keywords"]');
        removeExistingMeta('meta[name="robots"]');
        removeExistingMeta('meta[property^="og:"]');
        removeExistingMeta('meta[name^="twitter:"]');

        // Set basic meta tags
        setMetaTag('description', description);
        setMetaTag('keywords', keywords);
        setMetaTag('robots', robots);
        setMetaTag('author', 'ChemBizR');

        // Set Open Graph tags
        setMetaTag('og:title', ogTitle, true);
        setMetaTag('og:description', ogDescription, true);
        setMetaTag('og:image', ogImage, true);
        setMetaTag('og:url', canonicalUrl, true);
        setMetaTag('og:type', 'website', true);
        setMetaTag('og:site_name', 'ChemBizR', true);

        // Set Twitter Card tags
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', twitterTitle);
        setMetaTag('twitter:description', twitterDescription);
        setMetaTag('twitter:image', twitterImage);
        setMetaTag('twitter:site', '@chembizr'); // Replace with your actual Twitter handle

        // Set canonical URL
        setCanonicalLink(canonicalUrl);

        // Add JSON-LD structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": canonicalUrl,
            "image": ogImage,
            "publisher": {
                "@type": "Organization",
                "name": "ChemBizR",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${window.location.origin}/images/logo.png`
                }
            },
            "mainEntity": {
                "@type": "Organization",
                "@id": `${window.location.origin}/#organization`,
                "name": "ChemBizR"
            }
        };

        // Add or update JSON-LD script
        let jsonLdScript = document.querySelector('script[type="application/ld+json"][data-page-meta]');
        if (jsonLdScript) {
            jsonLdScript.textContent = JSON.stringify(structuredData);
        } else {
            jsonLdScript = document.createElement('script');
            jsonLdScript.type = 'application/ld+json';
            jsonLdScript.setAttribute('data-page-meta', 'true');
            jsonLdScript.textContent = JSON.stringify(structuredData);
            document.head.appendChild(jsonLdScript);
        }

        // Log for debugging (remove in production)
        console.log(`Meta tags applied for: ${location.pathname}`, {
            title,
            description,
            hasCustomMeta: !!metaTags
        });

    }, [metaTags, loading, location.pathname, defaultTitle, defaultDescription, defaultKeywords, defaultImage]);

    return null; // This component doesn't render anything visible
};

export default DynamicMetaTags;
