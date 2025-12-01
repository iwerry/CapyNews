import React from 'react'
import { useParams } from 'react-router-dom'
import NewsSection from '../components/NewsSection'
import { CategorySlug } from '../types/news'

export default function Section() {
    const { section } = useParams();
    const title = section ? section.charAt(0).toUpperCase() + section.slice(1) : 'Section';

    return <NewsSection title={title} category={section as CategorySlug} />
}
