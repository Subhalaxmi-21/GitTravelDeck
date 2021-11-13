import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Context } from '../../../context/Context'
import './Write.css'

export default function Write() {

  const[title, setTitle] = useState("")
  const[desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newPosts = {
      username: user,
      title,
      desc,
    };
    if(file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("file", new File(
        [file], filename
      ))
      newPosts.photo = filename;
      try {
        await axios.post("/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPosts)
      window.location.replace("/post/" + res.data._id)
    } catch (err) {}
  };

    return (
        <div className="write">
          {file && (  
             <img
             className="writeImg"
             src={URL.createObjectURL(file)}
             alt=""
           />
          )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
        </div>
    );
}
