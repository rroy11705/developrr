import { GA_TRACKING_ID, pageview, event } from './gtag'

describe('gtag', () => {
  beforeEach(() => {
    window.gtag = jest.fn()
  })

  it('calls gtag config with correct parameters on pageview', () => {
    const url = '/test'
    pageview(url as unknown as URL)
    expect(window.gtag).toHaveBeenCalledWith('config', GA_TRACKING_ID, {
      page_path: url
    })
  })

  it('calls gtag event with correct parameters on event', () => {
    const mockEvent = {
      action: 'test_action',
      category: 'test_category',
      label: 'test_label',
      value: 123
    }
    event(mockEvent)
    expect(window.gtag).toHaveBeenCalledWith('event', mockEvent.action, {
      event_category: mockEvent.category,
      event_label: mockEvent.label,
      value: mockEvent.value
    })
  })
})
