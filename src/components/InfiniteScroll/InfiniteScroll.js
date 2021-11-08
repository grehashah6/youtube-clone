import React from "react";
import {Waypoint} from 'react-waypoint';

// const Scrolling ={
//     children: React.ReactElement,
//     // callBack(args : Waypoint.CallbackArgs) :void
// }

export const InfiniteScroll = (props) => {
    return <div>
{props.children}
<Waypoint bottomOffset="-10px" onEnter={props.callBack} ></Waypoint>
    </div>
}