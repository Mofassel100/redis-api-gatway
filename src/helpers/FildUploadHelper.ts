import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'db6qhze3s',
  api_key: '547317767725864',
  api_secret: '7zOO5vTuCaPtSsu2AwbYNjtIXAg'
});
const UploadImg = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};
export const FildUploadCloud = {
  UploadImg
};
