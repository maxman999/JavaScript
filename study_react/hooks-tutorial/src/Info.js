import React, { useState, useEffect } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // custom hooks
    const [state, onChange] = useInputs({ 
        name : '',
        nickname : ''
    })

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name,
            nickname
        });
    });

    // 마운트 될 때만 특정 로직을 실행하고 싶을 때 (두 번째 파라미터에 빈 배열 입력 )
    useEffect( () => { 
        console.log('마운트될 때만 실행됩니다.');
    }, []);


    // 특정 값이 업데이트될 때만 실행하고 싶을 때
    useEffect(()=>{
        console.log(name);    
    },[name]);

    // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶을 때
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => { // 뒷정리(cleanup) 함수 반환
            console.log('cleanup');
            console.log(name);
        };
    });




    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;