import axios from "axios";
import { useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AddBannerModal({ isOpen, onClose, position }) {

  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isAttach, setIsAttach] = useState(false);

  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  const [tagColor, setTagColor] = useState('#000000');
  const [titleColor, setTitleColor] = useState('#000000');
  const [subTitleColor, setSubTitleColor] = useState('#000000');
  const [buttonColor, setButtonColor] = useState('#000000');
  const [buttonColorHover, setButtonColorHover] = useState('#000000');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreviewUrl(URL.createObjectURL(file));
      setImageFile(file);
      setIsAttach(true);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  const addSubmit = async () => {
    try {

      if (imagePreviewUrl === null && tag === '' && title === '' && subTitle === '') {
        alert("Please fill in the required information.");
        return;
      }

      setIsSubmitting(true);

      const bannerPosition = position;
      let imgCloudPath;
      let imgCloudPublicId;

      const formData = new FormData();
      formData.append('avatar', imageFile);
      formData.append('mode', 'banner');


      const responseUpload = await axios.post('http://localhost:4001/admin/file/upload/jpg', formData, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } });
      if (responseUpload.status === 201) {

        imgCloudPath = responseUpload.data.url;
        imgCloudPublicId = responseUpload.data.public_id;

        const data = {
          img: imgCloudPath,
          imgPublicId: imgCloudPublicId,
          tag: tag,
          title: title,
          subTitle: subTitle,
          position: bannerPosition,

          tagColor: tagColor,
          titleColor: titleColor,
          subTitleColor: subTitleColor,
          buttonColor: buttonColor,
          buttonHoverColor: buttonColorHover
        }

        const responseAddBanner = await axios.post('http://localhost:4001/admin/banner/add', data, { withCredentials: true });
        if (responseAddBanner.status === 201) {
          alert(responseAddBanner.data.message);

          onClose(); setImagePreviewUrl(null); setImageFile(null); setIsAttach(false)
          setTag(''); setTitle(''); setSubTitle('');
          setTagColor('#000000'); setTitleColor('#000000'); setSubTitleColor('#000000'); setButtonColor('#000000'); setButtonColorHover('#000000');
          setIsSubmitting(false); setIsError(false);
        }

      }


    } catch (error) {
      setIsError(true);
    }
  }

  return (
    <div
      className={`fixed inset-0 z-70 bg-black/50 transition-opacity duration-300 flex justify-center items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => {
        onClose(); setImagePreviewUrl(null); setImageFile(null); setIsAttach(false)
        setTag(''); setTitle(''); setSubTitle('');
        setTagColor('#000000'); setTitleColor('#000000'); setSubTitleColor('#000000'); setButtonColor('#000000'); setButtonColorHover('#000000');
        setIsSubmitting(false); setIsError(false);
      }}
    >
      <div
        className={`bg-white w-120 h-135 flex flex-col items-center rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >

        {!isError ?
          (<h1 className="mt-4 text-2xl font-semibold text-teal-700">Add Banner</h1>) :
          (<h1 className="mt-4 text-2xl font-semibold text-red-700">Something went wrong</h1>)}


        <div className="mt-5 flex items-center justify-center bg-gray-100 w-100 h-50 relative">

          {!isAttach ? (
            <div>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
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
                  src={imagePreviewUrl}
                  alt="Preview"
                  className="w-full h-auto max-h-48 object-contain rounded"
                />
                <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800 absolute right-2 bottom-1"
                  onClick={() => { setImagePreviewUrl(null); setImageFile(null); setIsAttach(false); }}>
                  <RiDeleteBin6Line size={35} />
                </button>
              </div>
            )}

        </div>

        <div className="flex flex-row self-start mt-4 ml-10 ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Tag</label>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Enter tag"
              className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-50"
            />
          </div>

          <div className="flex flex-col gap-1 px-10">
            <label className="font-semibold text-sm">Tag Color</label>
            <input
              type="color"
              value={tagColor}
              onChange={(e) => setTagColor(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Button Color</label>
            <input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
            />
          </div>

        </div>

        <div className="flex flex-row self-start mt-4 ml-10 relative">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter tag"
              className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-50"
            />
          </div>

          <div className="flex flex-col gap-1 px-10">
            <label className="font-semibold text-sm">Title Color</label>
            <input
              type="color"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Button Hover</label>
            <input
              type="color"
              value={buttonColorHover}
              onChange={(e) => setButtonColorHover(e.target.value)}
            />
          </div>

        </div>

        <div className="flex flex-row self-start mt-4 ml-10 ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Subtitle</label>
            <input
              type="text"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              placeholder="Enter tag"
              className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-50"
            />
          </div>

          <div className="flex flex-col gap-1 px-10">
            <label className="font-semibold text-sm">Subtitle Color</label>
            <input
              type="color"
              value={subTitleColor}
              onChange={(e) => setSubTitleColor(e.target.value)}
            />
          </div>

        </div>


        <button className="bg-teal-700 w-100 h-10 rounded mt-5 cursor-pointer hover:bg-teal-800"
          onClick={() => { addSubmit(); }}
          disabled={isSubmitting}>

          {isSubmitting ? (<p className="text-white text-lg font-semibold">Loading...</p>) :
            (<p className="text-white text-lg font-semibold">Add</p>)}
        </button>

      </div>

    </div>
  );
}
