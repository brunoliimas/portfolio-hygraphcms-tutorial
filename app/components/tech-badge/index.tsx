type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({name}: TechBadgeProps)=>{
    return(
        <span className="text-emerald-400 bg-emerald-900/80  hover:text-emerald-900 hover:bg-emerald-400 transition-colors text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}