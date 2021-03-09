import express from "express";
import { 
    videoDetail, 
    postUpload,
    getUpload, 
    editVideo, 
    deleteVideo, 
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deletVideo, deleteVideo);

export default videoRouter;
