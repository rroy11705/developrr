import { Container } from './styles'

export interface CareerProps {
  role: string
  company: string
  urlCompany: string
  city: string
  country: string
  startDate: string
  finalDate: string
  duration?: string
}

const Career = ({
  role,
  company,
  urlCompany,
  city,
  country,
  startDate,
  finalDate,
  duration
}: CareerProps) => {
  return (
    <Container data-testid="career-component">
      <div className="job">
        <h3>{role}</h3>
        <p>
          <a href={`${urlCompany}`}>{company}</a> • {city}, {country}
        </p>
        <span>
          {startDate} - {finalDate} {duration ? `• ${duration}` : ''}
        </span>
      </div>
    </Container>
  )
}

export default Career
