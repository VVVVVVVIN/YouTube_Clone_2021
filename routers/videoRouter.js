import express from "express";
import { 
    videos,
    videoDetail, 
    upload, 
    editVideo, 
    deleteVideo, 
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deletVideo, deleteVideo);

export default videoRouter;