import Model from '../../models/model.js'

const volunteersModel = new Model('volunteers')

export const getVolunteers = async (req, res) => {
  try {
    const data = await volunteersModel.select('user_id, skills, availability')
    res.status(200).json({ messages: data.rows })
  } catch (err) {
    res.status(200).json({ messages: err.stack })
  }
}

export const getVolunteer = async (req, res) => {
  const { id } = req.params
  try {
    const data = await volunteersModel.select('*', `WHERE id = $1`, [id])
    res.status(200).json({ events: data.rows })
  } catch (err) {
    res.status(500).json({ events: err.stack })
  }
}

export const addVolunteer = async (req, res) => {
  const { user_id, skills, availability } = req.body
  const columns = 'user_id, skills, availability'
  const values = `${user_id}, '${skills}', '${availability}'`
  try {
    const data = await volunteersModel.insertWithReturn(columns, values)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    res.status(500).json({ message: err.stack })
  }
}

export const updateVolunteer = async (req, res) => {
  const { id } = req.params
  const { skills, availability } = req.body
  const updatedValues = { skills, availability }

  try {
    const data = await volunteersModel.update(updatedValues, id)
    res.status(200).json({ message: data.rows })
  } catch (err) {
    console.error('Error updating volunteer:', err)
    res
      .status(500)
      .json({ message: `Error updating volunteer: ${err.message}` })
  }
}
