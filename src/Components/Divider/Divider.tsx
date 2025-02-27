interface DividerProps {
    classes?: string;
}

const Divider = ({ classes }: DividerProps) => {
    return (
        <>
            <div className="container mx-auto">
                <hr className={`border-0 h-[1px] ${classes}`} style={{ backgroundImage: "linear-gradient(to right, transparent, #00858Eb6, transparent)" }} />
            </div>
        </>
    )
}


export default Divider