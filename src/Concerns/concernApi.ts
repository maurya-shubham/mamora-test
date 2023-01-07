export type Concern = {
  id: string;
  date: Date;
  severity: number;
  message: string;
};

/** Wait a period of time, then resolve or reject. */
async function _delayWithRejections() {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Something went wrong!"));
      } else {
        resolve();
      }
    }, 1000);
  });
}

/**
 * Mock API call to retrieve patient concerns.
 * @returns {Promise<Array<{ id: string; date: Date; message: string; severity: number; }>>}
 */
export async function loadConcernsApi(): Promise<Concern[]> {
  await _delayWithRejections();
  return [
    {
      id: "60f70b09d677a75988c71610",
      date: new Date("2021-01-02T19:00:00"),
      severity: 2,
      message: "I am having trouble sleeping"
    },
    {
      id: "60f70b09d677a75988c71612",
      date: new Date("2021-01-03T11:31:00"),
      severity: 2,
      message: "toko medication"
    },
    {
      id: "60f70b09d677a75988c71613",
      date: new Date("2021-01-03T12:53:00"),
      severity: 1,
      message: "Can I schedule a call with you?"
    },
    {
      id: "60f70b09d677a75988c71614",
      date: new Date("2021-01-03T12:59:00"),
      severity: 0,
      message: "still bleeding, need help"
    },
    {
      id: "60f70b09d677a75988c71615",
      date: new Date("2021-01-05T10:12:00"),
      severity: 1,
      message: "Hello, my baby keeps vomiting what do I do"
    },
    {
      id: "60f70b09d677a75988c71616",
      date: new Date("2021-01-05T04:13:00"),
      severity: 3,
      message: "Can i move the appointment to 9am"
    },
    {
      id: "60f70b09d677a75988c71617",
      date: new Date("2021-01-06T23:52:00"),
      severity: 3,
      message: "forgot to take medication should I take now?"
    },
    {
      id: "60f70b09d677a75988c71618",
      date: new Date("2021-01-07T01:00:00"),
      severity: 2,
      message: "thank you!"
    }
  ];
}

/**
 * Gets the string version of the severity
 */
export function getSeverityString(severity: number): string {
  switch (severity) {
    case 0:
      return "None";
    case 1:
      return "Low";
    case 2:
      return "Moderate";
    case 3:
      return "Severe";
    default:
      return "N/A";
  }
}

/**
 * Given a concern ID, mock an API call to mark it as incorrectly classified as a concern.
 * @param {string} id
 */
export async function flagConcernAsIncorrectApi(id) {
  await _delayWithRejections();
}

/**
 * Given a concern ID, mock an API call to resolve it.
 * @param {string} id
 */
export async function resolveConcernApi(_id) {
  await _delayWithRejections();
}
