import React, { useState } from "react";

const App = () => {
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (evnet) => {
      setValue(evnet.target.value);
    };

    return { value, onChange };
  };

  const id = useInput("");
  const password = useInput("");
  const passwordConfirm = useInput("");
  const name = useInput("");
  const contact = useInput("");
  const address = useInput("");
  const email = useInput("");

  const clickHandler = () => {
    const user = {
      id: id.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
      name: name.value,
      contact: contact.value,
      address: address.value,
      email: email.value,
    };

    console.log(user);
  };

  return (
    <div className="join">
      <div className="join__title">
        <h3>회원정보 입력</h3>
        <div className="join__line"></div>
        <ul className="join__list">
          <li>
            <div className="join__list__title">
              회원아이디<span>*</span>
            </div>
            <div className="join__list__join">
              <input type="text" placeholder="아이디를 입력해주세요." {...id} />
            </div>
          </li>
          <li>
            <div className="join__list__title">
              비밀번호<span>*</span>
            </div>
            <div className="join__list__join">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...password}
              />
            </div>
          </li>
          <li>
            <div className="join__list__title">
              비밀번호 확인<span>*</span>
            </div>
            <div className="join__list__join">
              <input
                type="password"
                placeholder="비밀번호를 확인합니다."
                {...passwordConfirm}
              />
              <div className="button__password">
                <button>확인</button>
              </div>
            </div>
          </li>
          <li>
            <div className="join__list__title">
              성명<span>*</span>
            </div>
            <div className="join__list__join">
              <input type="text" placeholder="성명을 입력해주세요." {...name} />
            </div>
          </li>
          <li>
            <div className="join__list__title">
              연락처<span>*</span>
            </div>
            <div className="join__list__join">
              <input type="number" {...contact} />
            </div>
          </li>
          <li>
            <div className="join__list__title">
              주소<span>*</span>
            </div>
            <div className="join__list__join">
              <input type="text" {...address} />
            </div>
          </li>
          <li>
            <div className="join__list__title">
              이메일<span>*</span>
            </div>
            <div className="join__list__join">
              <input type="text" {...email} />
            </div>
          </li>
        </ul>
        <div className="button">
          <button onClick={clickHandler}>회원가입</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default App;
