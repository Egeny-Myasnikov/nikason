  export const moveTo = (targetRef) => {
        targetRef.current.scrollIntoView({
            behavior: "smooth",
        });
}
export const scrollToTop = () => {
         window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }