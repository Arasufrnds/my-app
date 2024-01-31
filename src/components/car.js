function Car(props){
    // const { car } = props;
    // const { carColor } = props;

    const { carProp } = props; 
    const { color, brand} = carProp;

   

    const text = `im ${color} ${brand} car`;

   

    return(
        <h2>{text}</h2>
    )
}

export default Car;