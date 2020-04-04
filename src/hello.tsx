import React from 'react'

type Props<T> = {
  data: T
}

export default function Hello<T>({data}: Props<T>) {
  return <div>
    <h1>Hello {data}</h1>
  </div>
};
