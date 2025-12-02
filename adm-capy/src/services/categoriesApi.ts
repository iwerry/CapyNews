import { apiGet } from './apiClient';
import { Category } from '../types/news';

export async function fetchCategories(): Promise<Category[]> {
    return apiGet<Category[]>('/categories');
}
