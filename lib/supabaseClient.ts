export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      sections (
        id,
        name,
        slug
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data;
}

// Get all products
export async function getAllProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      sections (
        id,
        name,
        slug
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
}

// Get products by category name
export async function getProductsByCategory(categoryName: string) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      sections!inner (
        id,
        name,
        slug
      )
    `)
    .eq('sections.name', categoryName)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data || [];
}

// Get related products (same section, excluding current product)
export async function getRelatedProducts(
  sectionId: string,
  currentProductId: string
) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      sections (
        id,
        name,
        slug
      )
    `)
    .eq('section_id', sectionId)
    .neq('id', currentProductId)
    .limit(4);

  if (error) {
    console.error('Error fetching related products:', error);
    return [];
  }

  return data || [];
}