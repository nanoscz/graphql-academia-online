function errorHandler (error: any) {
  console.error(error)
  throw new Error(error)
}

export default errorHandler