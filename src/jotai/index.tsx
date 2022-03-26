import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

//
const WalletButtonShowState = atom(false)

const WalletListShowState = atom(false)

//Upgrade升级
const UpgradeState = atom(false)

//Task 分页
const TaskState = atom(false)
const AccountConfigPageState = atom(false)

const AccountExchangeState = atom(false)

const AccountDepositState = atom(false)



//Account Choose
const AccountChooseValue = atomWithStorage('AccountChoose',0)

const WalletAddress = atomWithStorage("WalletAddress","")

//EVM Account
const EVMAddressValue = atomWithStorage('EvmAddress','')

const AfterEvmAddressValue = atomWithStorage('AfterEvmAddress','')

//-----Substrate Account

const SubstrateAddressValue = atomWithStorage('SubstrateAddress','')

const AfterSubstrateAddressValue = atomWithStorage('AfterSubstrateAddress','')

//-----Substrate Account
const NearAddressValue = atomWithStorage('NearAddress','')

const AfterNearAddressValue = atomWithStorage('AfterNearAddress','')


export {WalletButtonShowState,WalletListShowState,EVMAddressValue,AccountConfigPageState,
  AfterEvmAddressValue,AccountChooseValue,NearAddressValue, AfterNearAddressValue,WalletAddress,
  AccountExchangeState,AccountDepositState,UpgradeState,TaskState}


