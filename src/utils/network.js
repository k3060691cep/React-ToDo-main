import axios from "axios";

export const getApiResource = (url, hook) => {
    axios
        .get(url)
        .then(({data}) => {
            hook(data);
        })
}

export const postApiResource = (url, hook, item, obj) => {
    axios
        .post(url,
            obj
        ).then(({data}) => {
        hook([...item, data],
        )
    })
}

export const patchApiResource = (url, id ,text) => {

    axios
        .patch(`${url}/${id}`, {name: text})
        .catch(() => {
            alert('Не удалось обновить задачу');
        });

}

export const deleteApiResource = (url, func, item) => {
    axios.delete(`${url}/` + item.id)
        .then(() => {
            func(item.id)
        })
}

export const postTaskApiResource = (url, hook, item, obj) => {
    axios
        .post(url, obj)
        .then(({data}) => {
            hook(item.id, data)
        })
}



