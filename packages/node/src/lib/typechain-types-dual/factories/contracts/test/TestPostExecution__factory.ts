/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestPostExecution,
  TestPostExecutionInterface,
} from "../../../contracts/test/TestPostExecution";

const _abi = [
  {
    inputs: [],
    name: "getSeaportMetadata",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct Schema[]",
        name: "schemas",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "fulfiller",
            type: "address",
          },
          {
            internalType: "address",
            name: "offerer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum ItemType",
                name: "itemType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "identifier",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct SpentItem[]",
            name: "offer",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum ItemType",
                name: "itemType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "identifier",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct ReceivedItem[]",
            name: "consideration",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
          {
            internalType: "bytes32[]",
            name: "orderHashes",
            type: "bytes32[]",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "zoneHash",
            type: "bytes32",
          },
        ],
        internalType: "struct ZoneParameters",
        name: "zoneParameters",
        type: "tuple",
      },
    ],
    name: "validateOrder",
    outputs: [
      {
        internalType: "bytes4",
        name: "validOrderMagicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610975908161001c8239f35b600080fdfe60806040908082526004918236101561001757600080fd5b600091823560e01c90816301ffc9a71461076d5750806317b1f9421461023857632e778efc1461004657600080fd5b3461023457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261023457805161007f816108e1565b600190818152835b6020808210156100ee5784519085820182811067ffffffffffffffff8211176100c25786528682526060828201528383010152602001610087565b60248860418b7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5050919093610bbb6100ff8461092c565b515281516020918282019082821067ffffffffffffffff83111761020857508392959396949652828152846101338761092c565b510152805193610142856108e1565b601185527f54657374506f7374457865637574696f6e0000000000000000000000000000008186015261017d8251958387528387019061082a565b858103828701528651928382528282019083808660051b850101990195925b8584106101a957888a0389f35b9091929394959685806101f58c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086869f0301885286838d51805184520151918185820152019061082a565b9b9901979695919091019301919061019c565b8660416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5080fd5b509190346106de576020927ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc848136011261067b5767ffffffffffffffff90843582811161076957610140818701928236030112610769576084019061029e8282610888565b90501561070d57906102af91610888565b939093156106e15760a0843603126106de5782519160a08301838110828211176106b25784528435600681101561067b578352868501359473ffffffffffffffffffffffffffffffffffffffff928387169687810361023457898601528582013580878701526080606087019360608101358552013593858516850361067b57608087019485528a8851809a81947f6352211e0000000000000000000000000000000000000000000000000000000083528d83015260249b8c915afa918291849361061a575b50506103fc5760848960398a8d8b51937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f556e737570706f7274656420636f6e73696465726174696f6e20746f6b656e2060448201527f7479706520286d75737420696d706c656d656e742037323129000000000000006064820152fd5b9796959794519060068210156105ef575060020361056e57517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104ed5751811691160361046d575050517f17b1f942000000000000000000000000000000000000000000000000000000008152f35b608493602b929351937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f56616c696469747920636865636b20706572666f726d6564207072696f72207460448201527f6f20657865637574696f6e0000000000000000000000000000000000000000006064820152fd5b6084856029868a8a51937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f52657475726e6564206974656d20616d6f756e7420696e636f72726563746c7960448201527f206d6f64696669656400000000000000000000000000000000000000000000006064820152fd5b6084866033878b8b51937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f56616c696469747920636865636b20706572666f726d6564207769746820756e60448201527f737570706f72746564206974656d2074797065000000000000000000000000006064820152fd5b806021897f4e487b71000000000000000000000000000000000000000000000000000000008a945252fd5b909192508b903d8d116106aa575b601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01683019081118382101761067f578c9183918b528101031261067b5751858116810361067b57903880610375565b8280fd5b8a8560418e7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b3d9150610628565b6024836041897f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b80fd5b806032867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b606486888651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f4e6f20636f6e73696465726174696f6e206974656d7320737570706c696564006044820152fd5b8480fd5b8390853461067b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261067b57357fffffffff00000000000000000000000000000000000000000000000000000000811680910361067b57602092507f3839be19000000000000000000000000000000000000000000000000000000008114908115610800575b5015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014836107f9565b919082519283825260005b8481106108745750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b602081830181015184830182015201610835565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156108dc570180359067ffffffffffffffff82116108dc576020019160a08202360383136108dc57565b600080fd5b6040810190811067ffffffffffffffff8211176108fd57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8051156109395760200190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea164736f6c6343000811000a";

type TestPostExecutionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestPostExecutionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestPostExecution__factory extends ContractFactory {
  constructor(...args: TestPostExecutionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestPostExecution> {
    return super.deploy(overrides || {}) as Promise<TestPostExecution>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestPostExecution {
    return super.attach(address) as TestPostExecution;
  }
  override connect(signer: Signer): TestPostExecution__factory {
    return super.connect(signer) as TestPostExecution__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestPostExecutionInterface {
    return new utils.Interface(_abi) as TestPostExecutionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestPostExecution {
    return new Contract(address, _abi, signerOrProvider) as TestPostExecution;
  }
}