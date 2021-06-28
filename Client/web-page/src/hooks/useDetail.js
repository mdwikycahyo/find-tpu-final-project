import { useEffect, useState } from "react"
import { setLoading, setError } from "../store/actionCreator"

function useDetail(url) {
    const [Detail, setDetail] = useState({})

    useEffect(()=>{
      fetch(url)
      .then(response => {
        return response.json()
      })
      .then(newDetail => {
        // console.log(newDetail);
        setDetail(newDetail)
      })
      .catch(err => {
        setError(err);
      })
      .finally(_=>{
        setLoading(false)
      })
      // eslint-disable-next-line
  }, [])
  return Detail
}

export default useDetail