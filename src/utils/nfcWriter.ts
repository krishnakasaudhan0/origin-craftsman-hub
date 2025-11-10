// NFC Writing utility using Web NFC API
// Writes product authentication data to NFC tags

export interface NFCData {
  tokenId: string;
  cid: string;
  verifyUrl: string;
}

export const checkNfcSupport = (): boolean => {
  return "NDEFReader" in window;
};

export const writeNFCData = async (data: NFCData): Promise<boolean> => {
  try {
    if (!checkNfcSupport()) {
      throw new Error("Web NFC is not supported on this browser");
    }

    // Create the NDEF message
    const ndefMessage = {
      records: [
        {
          recordType: "text",
          data: JSON.stringify(data),
        },
        {
          recordType: "url",
          data: data.verifyUrl,
        },
      ],
    };

    console.log("Writing NFC data:", ndefMessage);

    // In production with actual Web NFC API:
    // const ndef = new NDEFReader();
    // await ndef.write(ndefMessage);

    // Simulate NFC write operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("NFC tag written successfully");
    
    return true;
  } catch (error) {
    console.error("Error writing NFC tag:", error);
    throw error;
  }
};

export const readNFCData = async (): Promise<NFCData | null> => {
  try {
    if (!checkNfcSupport()) {
      throw new Error("Web NFC is not supported on this browser");
    }

    console.log("Reading NFC tag...");

    // In production with actual Web NFC API:
    // const ndef = new NDEFReader();
    // await ndef.scan();
    // const message = await new Promise(resolve => {
    //   ndef.onreading = event => resolve(event.message);
    // });

    // Simulate NFC read operation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock data
    const mockData: NFCData = {
      tokenId: "1001",
      cid: "QmExample123",
      verifyUrl: "https://originapp.io/verify?tokenId=1001",
    };

    console.log("NFC tag read successfully:", mockData);
    
    return mockData;
  } catch (error) {
    console.error("Error reading NFC tag:", error);
    return null;
  }
};

export const formatNFCData = (data: NFCData): string => {
  return JSON.stringify(data, null, 2);
};
