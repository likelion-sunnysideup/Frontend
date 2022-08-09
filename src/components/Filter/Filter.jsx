import React, { useState } from 'react';
import { 
  FilterContainer,
  FilterBackground,
} from './Filter.js';
import './Filter.css';

const sortOptionList = [
  { value: 'sort', name: '정렬'},
  { value: 'recommend', name: '추천 순'},
  { value: 'save', name: '저장 많은 순'},
  { value: 'lastest', name: '최신 등록 순'},
];

const genderOptionList = [
  { value: 'gender', name: '성별'},
  { value: 'man', name: '남성'},
  { value: 'woman', name: '여성'},
];

const colorOptionList = [
  { value: 'color', name: '색상'},
  { value: 'white', name: '화이트'},
  { value: 'black', name: '블랙'},
  { value: 'beige', name: '베이지'},
  { value: 'brown', name: '브라운'},
  { value: 'gray', name: '그레이'},
  { value: 'blue', name: '블루'},
];

const styleOptionList = [
  { value: 'style', name: '스타일'},
  { value: 'casual', name: '캐주얼'},
  { value: 'feminine', name: '페미닌'},
  { value: 'office', name: '오피스룩'},
  { value: 'school', name: '스쿨룩'},
];

const FilterMenu = ({ value, onChange, optionList }) => {
  return (
    <div className='selectBox'>
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {optionList.map((it, idx) => 
          <option
            value={it.value}
            key={idx}
          >
          {it.name}
          </option>
        )}
      </select>
    </div>
  )
}

function Filter({ clothList }) {
  const [sortType, setSortType] = useState('sort');
  const [genderType, setGenderType] = useState('gender');
  const [colorType, setColorType] = useState('color');
  const [styleType, setStyleType] = useState('style');

  return (
    <>
      <FilterContainer>
        <FilterBackground>
            <FilterMenu 
              value={sortType} 
              onChange={setSortType}
              optionList={sortOptionList}
            />
            <FilterMenu 
              value={genderType} 
              onChange={setGenderType}
              optionList={genderOptionList}
            />
            <FilterMenu 
              value={colorType} 
              onChange={setColorType}
              optionList={colorOptionList}
            />
            <FilterMenu 
              value={styleType} 
              onChange={setStyleType}
              optionList={styleOptionList}
            />
        </FilterBackground>
      </FilterContainer>
    </>
  );
}
Filter.defaultProps ={
  clothList: [],
};
export default Filter;