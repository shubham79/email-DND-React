import randomId from "random-id";

export const ItemTypes = {
  INBOX: "inbox",
  FORENSICS: "forensics",
  HOMICIDE: "homicide",
  CASE_FILES: "case_files",
  STARRED: "starred",
  SENT: "sent",
  DRAFTS: "drafts",
};

export const mailItemsList = {
  INBOX: [
    {
      id: randomId(),
      title: "Lunch with detective",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
      type: "INBOX",
    },
    {
      id: randomId(),
      title: "New case files",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
      type: "INBOX",
    },
    {
      id: randomId(),
      title: "Forensics report from Ella",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
      type: "INBOX",
    },
    {
      id: randomId(),
      title: "Pierce murder history files",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: true,
      type: "INBOX",
    },
  ],
  FORENSICS: [
    {
      id: randomId(),
      title: "Blood report from Ohio crime scene",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
      type: "FORENSICS",
    },
  ],
  HOMICIDE: [],
  CASE_FILES: [],
  STARRED: [],
  SENT: [],
  DRAFTS: [
    {
      id: randomId(),
      title: "Procurement of new devices",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      type: "DRAFTS",
    },
    {
      id: randomId(),
      title: "Party in office",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      type: "DRAFTS",
    },
  ],
};

export const accepatbleMailtypes = {
  INBOX: [
    ItemTypes.INBOX,
    ItemTypes.FORENSICS,
    ItemTypes.HOMICIDE,
    ItemTypes.STARRED,
    ItemTypes.CASE_FILES,
  ],
  FORENSICS: [
    ItemTypes.INBOX,
    ItemTypes.FORENSICS,
    ItemTypes.HOMICIDE,
    ItemTypes.STARRED,
    ItemTypes.CASE_FILES,
  ],
  HOMICIDE: [
    ItemTypes.INBOX,
    ItemTypes.FORENSICS,
    ItemTypes.HOMICIDE,
    ItemTypes.STARRED,
    ItemTypes.CASE_FILES,
  ],
  CASE_FILES: [
    ItemTypes.INBOX,
    ItemTypes.FORENSICS,
    ItemTypes.HOMICIDE,
    ItemTypes.STARRED,
    ItemTypes.CASE_FILES,
  ],
  STARRED: [
    ItemTypes.INBOX,
    ItemTypes.FORENSICS,
    ItemTypes.HOMICIDE,
    ItemTypes.STARRED,
    ItemTypes.CASE_FILES,
  ],
  SENT: [ItemTypes.SENT, ItemTypes.DRAFTS],
  DRAFTS: [ItemTypes.SENT, ItemTypes.DRAFTS],
};
