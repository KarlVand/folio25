import React, { useRef, useEffect }  from 'react';
import './canvas.css';


const Canvas = props => {
    
    const canvasRef = useRef(null);

    const draw = (ctx) => {
        /* canvas base */
        ctx.fillStyle = "#0f1e23";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        /* canvas drawing */
        ctx.fillStyle = "#3c7a89";
        ctx.fillRect(10, 10, 40, 60);
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 20, 40, 60);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "orange";
        ctx.moveTo(200, 540);
        ctx.lineTo(180, 20);
        
        ctx.stroke();
    }


    useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    draw(ctx);
    }, [draw]);

    
    
    return (
        <div className='canvasContainer'>
            <canvas ref={canvasRef} {...props} id='canvasOne' alt="a canvas should be here">
                Blue magic
            </canvas>
            
        </div>
        
        
    )
}

export default Canvas;
