import { Slider, TreeSelect } from "antd";
import { FC, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { TreeNode } from "antd/lib/tree-select";
import "./Filter.scss";
import { useInput } from "../../../hooks/useInput";
import { userListSlice } from "../../../Redux/reducers/userListSlice";
import { useAppDispatch } from "../../../hooks/redux";

const Filter: FC = () => {


  const {filter,sort} = userListSlice.actions
  const dispatch = useAppDispatch()
  const select = useInput(undefined);
  const sex  = useInput("");
  const search = useInput(undefined);
  const [slider,setSlider] = useState<{start:number,end:number}>({start:0,end:30})

    useEffect(()=>{
      dispatch(filter({age:{start:slider.start,end:slider.end},gender:sex.value,name:search.value}))
    },[slider,sex.value,search.value])
    
    
    useEffect(()=>{
        dispatch(sort(select.value || ""))
    },[select.value])


  return (
    <div className="filter">
      <div className="filter__title title">Filter</div>
      <div className="filter__menu">
        <div className="filter__parametrs">
          <p>Name</p>
          <input type="text" value={search.value} onChange={(e)=>search.setValue(e.target.value)} 
          placeholder="Search by name" />
        </div>
        <div className="filter__parametrs">
          <p>Name</p>
          <Slider onChange={(e)=>setSlider({start:e[0],end:e[1]})} value={[slider.start, slider.end]} 
          range defaultValue={[0, 0]} />
          <span>{`${slider.start} - ${slider.end}`}</span>
        </div>
        <div className="filter__parametrs">
          <p>Gender</p>
          <div onClick={()=>sex.value == "male"?sex.setValue(""):sex.setValue("male")} 
          className={`${sex.value!==`male`?`man`:`man active`}`}>Male</div>
          <div onClick={()=>sex.value == "female"?sex.setValue(""):sex.setValue("female")} 
          className={`${sex.value!==`female`?`man`:`man active`}`}>Female</div>
        </div>
        <div className="filter__parametrs">
          <p>Sort By</p>
          <TreeSelect virtual  className="filter__treeSelect" showSearch value={select.value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Name" treeDefaultExpandAll onChange={(e) => select.setValue(e)}>
            <TreeNode  value="less-more" title="less-more">
              <TreeNode value="l-name" title="name"/>
              <TreeNode value="l-date of birth" title="date of birth"/>
              <TreeNode value="l-city" title="city"/>
            </TreeNode>
            <TreeNode value="more-less" title="more-less" >
                 <TreeNode value="m-name" title="name"/>
                 <TreeNode value="m-date of birth" title="date of birth"/>
                 <TreeNode value="m-city" title="city"/>
             </TreeNode>
          </TreeSelect>
        </div>
      </div>
    </div>
  );
};

export default Filter;
