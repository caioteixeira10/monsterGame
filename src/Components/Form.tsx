import { useForm, SubmitHandler } from "react-hook-form"

type FormFields = {
    name: string,
    attack: number,
    defense: number,
    speed: number,
    hp: number,
    image_url: string
}


function Form ({ sendDataToParent, title }) {
    const { register, handleSubmit } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        sendDataToParent(data);
    }


    return (
                <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                    <h1>{title}</h1>
                    </div>
                    <div className="form-group">
                        <input {...register("name", { valueAsNumber: true, required: true })} type="text" placeholder="name" className="form-control"/>
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
                    <button style={{ marginTop: '10px' }} type="submit" class="btn btn-primary">Submit</button>
                </form>
                 </>
    )
}

export default Form;
