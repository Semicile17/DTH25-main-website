

const Background = ({ children }) => (
    <div className="relative top-0 left-0 w-screen h-screen overflow-y-scroll " style={{ backgroundImage: `url('/bg_img.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'repeat' }}>
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

export default Background;