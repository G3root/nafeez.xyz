import { useClipboard } from '@/hooks/utils';
import * as React from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
export interface IWalletAddressButtonProps {}
const walletAddress = '0xD2eCE15856813709Dd181A55c9fC82059Fdb2E2c';

export function WalletAddressButton(props: IWalletAddressButtonProps) {
  const { copy, copied } = useClipboard({ timeout: 1000 });
  return (
    <button
      onClick={() => {
        copy(walletAddress);
      }}
      className="inline-flex items-center rounded-md bg-gray-200 py-px px-2 text-sm shadow-sm dark:bg-gray-800"
      aria-label="copy wallet address to clipboard"
      title={walletAddress}
    >
      0xD2e...2E2c{' '}
      {copied ? (
        <FiCheck className="ml-2" aria-hidden />
      ) : (
        <FiCopy className="ml-2" aria-hidden />
      )}
    </button>
  );
}
