import React from 'react'
import { ResponsiveStream } from '@nivo/stream'

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']

const Stream = (props) => (
    <div className="graphBox">
    <ResponsiveStream
        margin={{
            "top": 10,
            "right": 15,
            "bottom": 1.5,
            "left": 1.5,
        }}
        data={props.streamData}
        keys={["swim", "hike", "gym", "run", "cycle", "other"]}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "",
            "legendOffset": -40,
        }}
        offsetType="none"
        colors={colors}
        enableGridX={false}
        enableGridY={true}
        isInteractive={true}
        animate={false}
        borderWidth={0}
        // legends={[
        //     {
        //         "anchor": "bottom-right",
        //         "direction": "column",
        //         "translateX": 100,
        //         "itemWidth": 80,
        //         "itemHeight": 20,
        //         "itemTextColor": "#999",
        //         "symbolSize": 12,
        //         "symbolShape": "circle",
        //         "effects": [
        //             {
        //                 "on": "hover",
        //                 "style": {
        //                     "itemTextColor": "#000"
        //                 }
        //             }
        //         ]
        //     }
        // ]}
      />
    </div>
)

export default Stream
