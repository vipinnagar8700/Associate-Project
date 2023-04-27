

const AddFileName = () => {
  return (
    <div className="text-center text-lg-start lh-0">
    <div class="upload-btn-wrapper ">
      <button className="btn fs-13" style={{backgroundColor:"#bfbfbf",color:"#fff",border:"1px solid #fff"}}>
       Add File
      </button>
      <input
      className="w-100 h-100"
        type="file"
        name="myfile"
      />
    </div>
  </div>
  )
}

export default AddFileName