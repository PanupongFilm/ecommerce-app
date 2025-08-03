import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AddProductModal({ isOpen, onClose, position }) {

  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imagePreviewUrl, setImagePreviewUrl] = useState(new Array(4).fill(null));
  const [imageFile, setImageFile] = useState(new Array(4).fill(null));
  const fileInputRef = useRef([]);
  const [isAttach, setIsAttach] = useState(new Array(4).fill(false));

  const [preview, setPreview] = useState(1);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(1);

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);

  const [tags, setTags] = useState([]);
  const [tagId, setTagId] = useState('');

  const handleFileChange = (e) => {

    const file = e.target.files[0];
    if (file) {


      const newImgPreview = [...imagePreviewUrl];
      newImgPreview[preview - 1] = URL.createObjectURL(file);
      setImagePreviewUrl(newImgPreview);

      const newImgFile = [...imageFile];
      newImgFile[preview - 1] = file
      setImageFile(newImgFile);

      const newIsAttach = [...isAttach];
      newIsAttach[preview - 1] = true;
      setIsAttach(newIsAttach);

    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:4001/admin/category/get');
      if (response) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      alert(error.response.data.message || "Something went wrong.");
      onClose();
    }
  }

  const getTypes = async () => {
    try {
      const response = await axios.get('http://localhost:4001/admin/type/get');
      if (response) {
        setTypes(response.data.types);
      }
    } catch (error) {
      alert(error.response.data.message || "Something went wrong.");
      onClose();
    }
  }

  const getTags = async () => {
    try {
      const response = await axios.get('http://localhost:4001/admin/tag/get');
      if (response) {
        setTags(response.data.tag);
      }
    } catch (error) {
      alert(error.response.data.message || "Something went wrong.");
      onClose();
    }
  }

  const handleClick = () => {
    fileInputRef.current[preview - 1]?.click();
  };

  useEffect(() => {

    if (isOpen) {
      getCategories();
      getTypes();
      getTags();
    }
    else {
      setName('');
      setDescription('');
      setPrice(0);
      setStock(1);
      setIsSubmitting(false);
      setImagePreviewUrl(new Array(4).fill(null));
      setImageFile(new Array(4).fill(null));
      setIsAttach(new Array(4).fill(false));
      setPreview(1);
      setCategories([]);
      setCategoryId('');
      setTypes([]);
      setTypeId('');
      setTypeFilter([]);
      setTags([]);
      setTagId('');
    }

  }, [isOpen])


  useEffect(() => {

    if (categoryId) {
      let categoriesFilter = types.filter(type => type.category.toString() === categoryId);
      setTypeFilter(categoriesFilter);
    }

  }, [categoryId]);

  const addSubmit = async () => {
    try {

      if (imagePreviewUrl[0] === null || name === '' || description === '' || stock === 0 || price === 0) {
        alert("Please fill in the required information.");
        return;
      }

      if (price <= 0 || stock <= 0) {
        alert("Price and Stock must be positive.");
        return;
      }

      setIsSubmitting(true);

      let imgCloudPath = new Array(4).fill(null);
      let imgCloudPublicId = new Array(4).fill(null);

      for (let i = 0; i < 4; i++) {
        const formData = new FormData();
        formData.append('avatar', imageFile[i]);

        const responseUpload = await axios.post('http://localhost:4001/admin/file/upload/jpg', formData, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } });
        if (responseUpload.status === 201) {
          imgCloudPath[i] = responseUpload.data.url;
          imgCloudPublicId[i] = responseUpload.data.public_id;
        }
        else {
          alert('upload failed at index: ', i);
          onClose();
          return;
        }
      }

      const data = {

        name: name,
        price: price,
        description: description,
        imgs: imgCloudPath,
        imgPublicId: imgCloudPublicId,
        stock: stock

      }

      const responseAddBanner = await axios.post('http://localhost:4001/admin/product/create', data, { withCredentials: true });
      if (responseAddBanner.status === 201) {
        alert(responseAddBanner.data.message);
        onClose();
      }


    } catch (error) {
      setIsError(true);
      alert(error.response.data.message);
    }
  }

  return (
    <div
      className={`fixed inset-0 z-70 bg-black/50 transition-opacity duration-300 flex justify-center items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => {
        onClose();
      }}
    >
      <div
        className={`bg-white w-120 h-130 flex flex-col items-center rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >

        {!isError ?
          (<h1 className="mt-4 text-2xl font-semibold text-teal-700">Add Product</h1>) :
          (<h1 className="mt-4 text-2xl font-semibold text-red-700">Something went wrong</h1>)}


        <div className="mt-2 flex items-center justify-center bg-gray-100 w-100 h-50 relative">

          <div className="absolute right-3 top-2  flex flex-row gap-1.5 ">
            <button className="rounded bg-teal-700 text-white w-8 h-8 font-semibold tex-lg hover:bg-teal-800 cursor-pointer" onClick={() => { setPreview(1); }}>1</button>
            <button className="rounded bg-teal-700 text-white w-8 h-8 font-semibold tex-lg hover:bg-teal-800 cursor-pointer" onClick={() => { setPreview(2); }}>2</button>
            <button className="rounded bg-teal-700 text-white w-8 h-8 font-semibold tex-lg hover:bg-teal-800 cursor-pointer" onClick={() => { setPreview(3); }}>3</button>
            <button className="rounded bg-teal-700 text-white w-8 h-8 font-semibold tex-lg hover:bg-teal-800 cursor-pointer" onClick={() => { setPreview(4); }}>4</button>
          </div>

          {!isAttach[preview - 1] ? (
            <div>

              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputRef.current[preview - 1] = el)}
                onChange={handleFileChange}
                className="hidden"
              />

              <button className="bg-teal-700 text-white rounded p-2 hover:bg-teal-800 cursor-pointer"
                onClick={handleClick}>
                <p className="font-semibold">Attach File</p>
              </button>
            </div>)
            :

            (
              <div>
                <img
                  src={imagePreviewUrl[preview - 1]}
                  alt="Preview"
                  className="w-full h-auto max-h-48 object-contain rounded"
                />
                <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800 absolute right-2 bottom-1"
                  onClick={() => {

                    const newImgPreview = [...imagePreviewUrl];
                    newImgPreview[preview - 1] = null
                    setImagePreviewUrl(newImgPreview);

                    const newImgFile = [...imageFile];
                    newImgFile[preview - 1] = null
                    setImageFile(newImgFile);

                    const newIsAttach = [...isAttach];
                    newIsAttach[preview - 1] = false
                    setIsAttach(newIsAttach);

                  }}>
                  <RiDeleteBin6Line size={35} />
                </button>
              </div>
            )}

        </div>

        <div className="flex flex-row self-start mt-4 ml-10 gap-5.5">

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-47"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-47"
            />
          </div>

        </div>


        <div className="flex flex-row self-start mt-4 ml-10 gap-5.5">

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-47"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-47"
            />
          </div>

        </div>

        <div className="flex flex-row justify-between items-center mt-2 gap-10">

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Category: </label>
            <select
              value={categoryId}
              onChange={(e) => { setCategoryId(e.target.value); }}
              className="py-1 border border-gray-200 p-2 text-xs w-27 focus:outline-none focus:border-gray-700"
            >

              <option value="" disabled={categoryId !== ""}>-- Select --</option>
              {Array.isArray(categories) && categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}

            </select>
          </div>


          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Type: </label>
            <select
              value={typeId}
              onChange={(e) => { setTypeId(e.target.value) }}
              className="py-1 border border-gray-200 p-2 text-xs w-27 focus:outline-none focus:border-gray-700"
            >

              <option value="" disabled={categoryId !== ""}>-- Select --</option>
              {Array.isArray(typeFilter) && typeFilter.map((type) => (
                <option key={type._id} value={type._id}>
                  {type.name}
                </option>
              ))}

            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Tag: </label>
            <select
              value={tagId}
              onChange={(e) => { setTagId(e.target.value) }}
              className="py-1 border border-gray-200 p-2 text-xs w-27 focus:outline-none focus:border-gray-700"
            >

              <option value="" disabled={categoryId !== ""}>-- Select --</option>
              {Array.isArray(tags) && tags.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.name}
                </option>
              ))}

            </select>
          </div>

        </div>




        <button className="bg-teal-700 w-100 h-10 rounded mt-3 cursor-pointer hover:bg-teal-800"
          onClick={() => { addSubmit(); }}
          disabled={isSubmitting}>

          {isSubmitting ? (<p className="text-white text-lg font-semibold">Loading...</p>) :
            (<p className="text-white text-lg font-semibold">Add</p>)}
        </button>

      </div>

    </div>
  );
}
