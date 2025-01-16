import CommonFileUpload from "@/CommonComponent/CommonFileUpload";

const ProductGallery = () => {
  return (
    <div className='product-upload'>
      <p>
        Product Gallery<span className='txt-danger'> *</span>
      </p>
      <CommonFileUpload />
    </div>
  );
};

export default ProductGallery;
