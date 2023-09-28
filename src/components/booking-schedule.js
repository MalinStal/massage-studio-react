import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  choiceOfTreatment,
  freeTimes30WeekDay,
  freeTimes60WeekDay,
  freeTimes90WeekDay,
  freeTimes30Saturday,
  freeTimes60Saturday,
  freeTimes90Saturday,
} from "../recoilstate/atoms";
import malin from "../pictures/malin.jpg";
import { useNavigate } from "react-router-dom";
import { getLocalTime, nextDay } from "../utils/datefunction";

export function GetTimeScadual() {
  const time30 = useRecoilValue(freeTimes30WeekDay);
  const time60 = useRecoilValue(freeTimes60WeekDay);
  const time90 = useRecoilValue(freeTimes90WeekDay);
  const time30S = useRecoilValue(freeTimes30Saturday);
  const time60S = useRecoilValue(freeTimes60Saturday);
  const time90S = useRecoilValue(freeTimes90Saturday);
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);

  const navigate = useNavigate();

  const handelClick = (time) => {
    setBookingInfo(time);
  
    navigate("/Boka3");
  };

  const style = {
    width: "20px",
    hight: "25px",
    borderRadius: "50px",
  };

  if (bookingInfo.day == "Lördag") {
    if (bookingInfo.length === "30 minuter") {
      const timeList30 = time30S.map((time, key) => {
        return (
          <li key={key} className="render-booking-li">
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.length}</span>
            <span>
              Malin <img src={malin} style={style} />
            </span>
            <button
              className="render-booking-btn"
              onClick={() => {handelClick({ ...bookingInfo, time: time });}}
            >
              Boka
            </button>
          </li>
        );
      });

      return timeList30;
    } else if (bookingInfo.length === "60 minuter") {
      const timeList60 = time60S.map((time, key) => {
        return (
          <li key={key} className="render-booking-li">
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.length}</span>
            <span>
              Malin <img src={malin} style={style} />
            </span>
            <button
              className="render-booking-btn"
              onClick={() => handelClick({ ...bookingInfo, time: time })}
            >
              Boka
            </button>
          </li>
        );
      });

      return timeList60;
    } else if (bookingInfo.length === "90 minuter") {
      const timeList90 = time90S.map((time, key) => {
        return (
          <li className="render-booking-li" key={key}>
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.length}</span>
            <span>
              Malin <img src={malin} style={style} />
            </span>
            <button
              className="render-booking-btn"
              onClick={() => handelClick({ ...bookingInfo, time: time })}
            >
              Boka
            </button>
          </li>
        );
      });

      return timeList90;
    }
  }
  else if (bookingInfo.day == "Söndag") {
    return (
      <div> Söndagar har vi tyvärr stängt, sök gärna på en annan dag! </div>
    );
  } else {
    if (bookingInfo.length === "30 minuter") {
      const timeList30 = time30.map((time, key) => {
        return (
          <li key={key} className="render-booking-li">
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.length}</span>
            <span>
              Malin <img src={malin} style={style} />
            </span>
            <button
              className="render-booking-btn"
              onClick={() => {handelClick({ ...bookingInfo, time: time }); }}
            >
             Boka
            </button>
          </li>
        );
      });

      return timeList30;
    } else if (bookingInfo.length === "60 minuter") {
      const timeList60 = time60.map((time, key) => {
        return (
          <li key={key} className="render-booking-li">
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.length}</span>
            <span>
              Malin <img src={malin} style={style} />
            </span>
            <button
              className="render-booking-btn"
              onClick={() => handelClick({ ...bookingInfo, time: time })}
            >
              {" "}
              Boka
            </button>
          </li>
        );
      });

      return timeList60;
    } else if (bookingInfo.length === "90 minuter") {
      const timeList90 = time90.map((time, key) => {
        return (
          <li className="render-booking-li" key={key}>
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.length}</span>
            <span>
              Malin <img src={malin} style={style} />
            </span>
            <button
              className="render-booking-btn"
              onClick={() => handelClick({ ...bookingInfo, time: time })}
            >
              Boka
            </button>
          </li>
        );
      });

      return timeList90;
    }
  }
}
