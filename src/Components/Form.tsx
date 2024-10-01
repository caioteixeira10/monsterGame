import { useForm, SubmitHandler } from "react-hook-form";

interface FormProps {
    sendDataToParent: (data: Monster) => void;
    title: string;
}

type Monster = {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    hp: number;
    image_url: string;
};

function Form({ sendDataToParent, title }: FormProps) {
    const { register, handleSubmit } = useForm<Monster>();
    const onSubmit: SubmitHandler<Monster> = (data) => {
        sendDataToParent(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <h1>{title}</h1>
                </div>
                <div className="form-group">
                    <input {...register("name" ,{ required: true })} type="text" placeholder="name" className="form-control" />
                </div>
                <div className="form-group">
                    <input {...register("attack", { valueAsNumber: true, required: true })} className="form-control" type="number" placeholder="attack" />
                </div>
                <div className="form-group">
                    <input {...register("defense", { valueAsNumber: true, required: true })} className="form-control" type="number" placeholder="defense" />
                </div>
                <div className="form-group">
                    <input {...register("speed", { valueAsNumber: true, required: true })} className="form-control" type="number" placeholder="speed" />
                </div>
                <div className="form-group">
                    <input {...register("hp", { valueAsNumber: true, required: true })} className="form-control" type="number" placeholder="hp" />
                </div>
                <div className="form-group">
                    <input {...register("image_url")} className="form-control" type="text" placeholder="image_url" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Form;
