import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("Home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("Home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("Search", { pageTitle: "Search", searchingBy, videos });
};
export const getUpload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });

export const postUpload = async(req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async(req, res) => {
  const {
  params: {id}
} = req;
  try{
    const video = await Video.findById(id);
  res.render("VideoDetail", { pageTitle: "Video Detail", video });
  } catch(error) {
    res.redirect(routes.home);
  }
};
  
export const editVideo = (req, res) =>
  res.render("EditVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("DeleteVideo", { pageTitle: "Delete Video" });
