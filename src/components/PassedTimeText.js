import React, {Component} from 'react';
import {Text} from 'react-native';

function PassedTimeText({children, ...props}){
    const {style}={props}

    let p_time=new Date();
    p_time.setHours(p_time.getHours()+10);
    const itemTime=new Date(item.time);
    let timeStr='';
    
    p_time-=itemTime;
    p_time/=1000;

    if(p_time>=31536000){       //년
        timeStr+=Math.floor(p_time/31536000)+'년 ';
    }
    else if(p_time>=2592000){    //달
        timeStr+=Math.floor(p_time/2592000)+'개월 ';
    }
    else if(p_time>=86400){     //일
        timeStr+=Math.floor(p_time/86400)+'일 ';
    }
    else if(p_time>=3600){      //시
        timeStr+=Math.floor(p_time/3600)+'시간 ';
    }
    else if(p_time>=60){        //분
        timeStr+=Math.floor(p_time/60)+'분 ';
    }else if(p_time>=0){         //초
        timeStr+=Math.floor(p_time%60)+'초 ';
    }
    if(p_time<0)
        timeStr+=Math.floor(p_time*-1)+'초 후';
    else
        timeStr+='전'+p_time;

    return (
        <Text style={style}>{timeStr}</Text>
    )
}

export default PassedTimeText;