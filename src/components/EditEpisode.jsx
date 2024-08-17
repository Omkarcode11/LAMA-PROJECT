import React, { useState } from "react";
import back from "./../assets/back.svg";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function EditEpisode({text}) {
  let [isEdit, setIsEdit] = useState(false);
  function edit(){
      setIsEdit(prev=>true)
  }
  function disCard(){
    setIsEdit(prev=>false)
  }
  function save(){
    setIsEdit(prev=>false)
  }
  let navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src={back}
            className="h-8 w-8 cursor-pointer "
            onClick={goBack}
          />{" "}
          Edit Transcript
        </div>
        <div>
          {!isEdit ? (
            <Button onClick={edit} width={16} text={"Edit"}></Button>
          ) : (
            <div className="flex gap-4">
              <Button
                text={"Discard"}
                onClick={disCard}
                className="text-red-500 border border-red-500 px-4 rounded-md"
              />
              <Button width={16} onClick={save} text={"Save"}></Button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-8 rounded-md mt-8 h-[35rem] overflow-y-scroll">
       {text}
      </div>
    </div>
  );
}

export default EditEpisode;
