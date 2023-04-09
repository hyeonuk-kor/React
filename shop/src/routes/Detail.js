/* eslint-disable */
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;
let Box = styled.div`
  background: grey;
  padding: 20px;
`;
function Detail(props) {
  let [count, setCount] = useState(0);
  let [alert1, setAlert] = useState(true);
  let [num, setNum] = useState('');

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num)) {
      setNum('');
      alert('그러지마세요');
    }
  }, [num]);

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => {
    return x.id == id;
  });
  let url = `https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`;
  return (
    <div>
      <div className="container">
        {alert1 == true ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}
        <input type="text" value={num} onChange={handleChange} />
        <Box>
          <YellowBtn bg="blue">버튼</YellowBtn>
        </Box>
        <div className="row">
          <div className="col-md-6">
            <img src={url} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
export default Detail;
