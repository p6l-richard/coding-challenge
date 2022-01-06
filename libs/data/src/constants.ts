export const DURATION_IN_MINUTES = [
  {
    key: '15',
    value: '15 min'
  },
  {
    key: '30',
    value: '30 min'
  },
  {
    key: '60',
    value: '1 hour'
  },
  {
    key: '120',
    value: '2 hours'
  },
];

export enum EventType {
  SHARE_SLOTS,
  TEST_SLOT
}

export const EVENT_TYPES = [
  {
    key: EventType.SHARE_SLOTS,
    value: 'Share slots'
  },
  {
    key: EventType.TEST_SLOT,
    value: 'Test slot'
  },
];
