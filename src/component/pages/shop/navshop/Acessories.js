import style from "./Acessories.module.css";
import className from 'classnames/bind';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as acessoriesService from "../../../../service/acessoriesService";

const cx = className.bind(style);

function Accessories() { 
    const [acessories, setAcessories] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            const data = await acessoriesService.getAll(id);
            setAcessories(data)
        }
        getData();
 
    }, [])
    return (
        <>
            {acessories.map((item) => {
                return (
                    <div className={cx('nav-but', 'mt-3')} key={item.id}>
                        <Link className={cx('acc', 'text-decoration-none')} to={`/shops/${item.id}`}>{item.cate_name}</Link>
                        <div className={cx('border-custom','mt-2')}></div>
                    </div>
                )

            })}

        </>
    );
}

export default Accessories;