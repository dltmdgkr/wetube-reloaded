import Video from "../models/Video"

export const home = (req, res) => {
    Video.find({}, (error, videos) => {
        console.log("errors", error);
        console.log("videos", videos);
    });
    console.log("hello");
    return res.render("home", { pageTitle: "Home", videos: [] });
};
export const watch = (req, res) =>{
    const { id } = req.params;
    return res.render("watch", { pageTitle: `Watching: ${video.title}` });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editting: ${video.title}` });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
    return res.redirect("/");
};


console.log('Test')
