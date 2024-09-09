const test = async (title, callback) => {
  try {
    await callback()
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }
}

export default test
