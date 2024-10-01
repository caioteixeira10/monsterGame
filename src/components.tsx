const Monster = function(name: string, attack: number, defense: number, speed: number, hp: number, image_url:string ) {
    return { name, attack, defense, speed, hp, image_url  };
};
export default Monster;