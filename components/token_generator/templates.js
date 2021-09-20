const simpleTokenCode ='pragma solidity 0.5.16;\n'+
'\n'+
'interface IBEP20 {\n'+
'  function totalSupply() external view returns (uint256);\n'+
'\n'+
'  function decimals() external view returns (uint8);\n'+
'\n'+
'  function symbol() external view returns (string memory);\n'+
'\n'+
'  function name() external view returns (string memory);\n'+
'\n'+
'  function getOwner() external view returns (address);\n'+
'\n'+
'  function balanceOf(address account) external view returns (uint256);\n'+
'\n'+
'  function transfer(address recipient, uint256 amount) external returns (bool);\n'+
'\n'+
'  function allowance(address _owner, address spender) external view returns (uint256);\n'+
'\n'+
'  function approve(address spender, uint256 amount) external returns (bool);\n'+
'\n'+
'  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n'+
'\n'+
'  event Transfer(address indexed from, address indexed to, uint256 value);\n'+
'\n'+
'  event Approval(address indexed owner, address indexed spender, uint256 value);\n'+
'}\n'+
'\n'+
'contract Context {\n'+
'  constructor () internal { }\n'+
'\n'+
'  function _msgSender() internal view returns (address payable) {\n'+
'    return msg.sender;\n'+
'  }\n'+
'\n'+
'  function _msgData() internal view returns (bytes memory) {\n'+
'    this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691\n'+
'    return msg.data;\n'+
'  }\n'+
'}\n'+
'\n'+
'library SafeMath {\n'+
'  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'    uint256 c = a + b;\n'+
'    require(c >= a, "SafeMath: addition overflow");\n'+
'\n'+
'    return c;\n'+
'  }\n'+
'\n'+
'  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'    return sub(a, b, "SafeMath: subtraction overflow");\n'+
'  }\n'+
'\n'+
'  function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n'+
'    require(b <= a, errorMessage);\n'+
'    uint256 c = a - b;\n'+
'\n'+
'    return c;\n'+
'  }\n'+
'\n'+
'  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'    if (a == 0) {\n'+
'      return 0;\n'+
'    }\n'+
'\n'+
'    uint256 c = a * b;\n'+
'    require(c / a == b, "SafeMath: multiplication overflow");\n'+
'\n'+
'    return c;\n'+
'  }\n'+
'\n'+
'  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'    return div(a, b, "SafeMath: division by zero");\n'+
'  }\n'+
'\n'+
'  function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n'+
'    require(b > 0, errorMessage);\n'+
'    uint256 c = a / b;\n'+
'\n'+
'    return c;\n'+
'  }\n'+
'\n'+
'  function mod(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'    return mod(a, b, "SafeMath: modulo by zero");\n'+
'  }\n'+
'\n'+
'  function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n'+
'    require(b != 0, errorMessage);\n'+
'    return a % b;\n'+
'  }\n'+
'}\n'+
'\n'+
'contract Ownable is Context {\n'+
'  address private _owner;\n'+
'\n'+
'  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n'+
'\n'+
'  constructor () internal {\n'+
'    address msgSender = _msgSender();\n'+
'    _owner = msgSender;\n'+
'    emit OwnershipTransferred(address(0), msgSender);\n'+
'  }\n'+
'\n'+
'  function owner() public view returns (address) {\n'+
'    return _owner;\n'+
'  }\n'+
'\n'+
'  modifier onlyOwner() {\n'+
'    require(_owner == _msgSender(), "Ownable: caller is not the owner");\n'+
'    _;\n'+
'  }\n'+
'\n'+
'  function renounceOwnership() public onlyOwner {\n'+
'    emit OwnershipTransferred(_owner, address(0));\n'+
'    _owner = address(0);\n'+
'  }\n'+
'\n'+
'  function transferOwnership(address newOwner) public onlyOwner {\n'+
'    _transferOwnership(newOwner);\n'+
'  }\n'+
'\n'+
'  function _transferOwnership(address newOwner) internal {\n'+
'    require(newOwner != address(0), "Ownable: new owner is the zero address");\n'+
'    emit OwnershipTransferred(_owner, newOwner);\n'+
'    _owner = newOwner;\n'+
'  }\n'+
'}\n'+
'\n'+
'contract BEP20Token is Context, IBEP20, Ownable {\n'+
'  using SafeMath for uint256;\n'+
'\n'+
'  mapping (address => uint256) private _balances;\n'+
'\n'+
'  mapping (address => mapping (address => uint256)) private _allowances;\n'+
'\n'+
'  uint256 private _totalSupply;\n'+
'  uint8 private _decimals;\n'+
'  string private _symbol;\n'+
'  string private _name;\n'+
'\n'+
'  constructor() public {\n'+
'    _name = "tokenName";\n'+
'    _symbol = "tokenSymbol";\n'+
'    _decimals = tokenDecimal;\n'+
'    _totalSupply = tokenNumAmount;\n'+
'    _balances[msg.sender] = _totalSupply;\n'+
'\n'+
'    emit Transfer(address(0), msg.sender, _totalSupply);\n'+
'  }\n'+
'\n'+
'  function getOwner() external view returns (address) {\n'+
'    return owner();\n'+
'  }\n'+
'\n'+
'  function decimals() external view returns (uint8) {\n'+
'    return _decimals;\n'+
'  }\n'+
'\n'+
'  function symbol() external view returns (string memory) {\n'+
'    return _symbol;\n'+
'  }\n'+
'\n'+
'  function name() external view returns (string memory) {\n'+
'    return _name;\n'+
'  }\n'+
'\n'+
'  function totalSupply() external view returns (uint256) {\n'+
'    return _totalSupply;\n'+
'  }\n'+
'\n'+
'  function balanceOf(address account) external view returns (uint256) {\n'+
'    return _balances[account];\n'+
'  }\n'+
'\n'+
'  function transfer(address recipient, uint256 amount) external returns (bool) {\n'+
'    _transfer(_msgSender(), recipient, amount);\n'+
'    return true;\n'+
'  }\n'+
'\n'+
'  function allowance(address owner, address spender) external view returns (uint256) {\n'+
'    return _allowances[owner][spender];\n'+
'  }\n'+
'\n'+
'  function approve(address spender, uint256 amount) external returns (bool) {\n'+
'    _approve(_msgSender(), spender, amount);\n'+
'    return true;\n'+
'  }\n'+
'\n'+
'  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {\n'+
'    _transfer(sender, recipient, amount);\n'+
'    _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "BEP20: transfer amount exceeds allowance"));\n'+
'    return true;\n'+
'  }\n'+
'\n'+
'  function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {\n'+
'    _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));\n'+
'    return true;\n'+
'  }\n'+
'\n'+
'  function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {\n'+
'    _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "BEP20: decreased allowance below zero"));\n'+
'    return true;\n'+
'  }\n'+
'\n'+
'  function mint(uint256 amount) public onlyOwner returns (bool) {\n'+
'    _mint(_msgSender(), amount);\n'+
'    return true;\n'+
'  }\n'+
'\n'+
'  function _transfer(address sender, address recipient, uint256 amount) internal {\n'+
'    require(sender != address(0), "BEP20: transfer from the zero address");\n'+
'    require(recipient != address(0), "BEP20: transfer to the zero address");\n'+
'\n'+
'    _balances[sender] = _balances[sender].sub(amount, "BEP20: transfer amount exceeds balance");\n'+
'    _balances[recipient] = _balances[recipient].add(amount);\n'+
'    emit Transfer(sender, recipient, amount);\n'+
'  }\n'+
'\n'+
'  function _mint(address account, uint256 amount) internal {\n'+
'    require(account != address(0), "BEP20: mint to the zero address");\n'+
'\n'+
'    _totalSupply = _totalSupply.add(amount);\n'+
'    _balances[account] = _balances[account].add(amount);\n'+
'    emit Transfer(address(0), account, amount);\n'+
'  }\n'+
'\n'+
'  function _burn(address account, uint256 amount) internal {\n'+
'    require(account != address(0), "BEP20: burn from the zero address");\n'+
'\n'+
'    _balances[account] = _balances[account].sub(amount, "BEP20: burn amount exceeds balance");\n'+
'    _totalSupply = _totalSupply.sub(amount);\n'+
'    emit Transfer(account, address(0), amount);\n'+
'  }\n'+
'\n'+
'  function _approve(address owner, address spender, uint256 amount) internal {\n'+
'    require(owner != address(0), "BEP20: approve from the zero address");\n'+
'    require(spender != address(0), "BEP20: approve to the zero address");\n'+
'\n'+
'    _allowances[owner][spender] = amount;\n'+
'    emit Approval(owner, spender, amount);\n'+
'  }\n'+
'\n'+
'  function _burnFrom(address account, uint256 amount) internal {\n'+
'    _burn(account, amount);\n'+
'    _approve(account, _msgSender(), _allowances[account][_msgSender()].sub(amount, "BEP20: burn amount exceeds allowance"));\n'+
'  }\n'+
'}';

const safemoonCode = 'pragma solidity ^0.6.12;\n'+
'interface IERC20 {\n'+
'\n'+
'    function totalSupply() external view returns (uint256);\n'+
'\n'+
'    function balanceOf(address account) external view returns (uint256);\n'+
'\n'+
'    function transfer(address recipient, uint256 amount) external returns (bool);\n'+
'\n'+
'    function allowance(address owner, address spender) external view returns (uint256);\n'+
'\n'+
'    function approve(address spender, uint256 amount) external returns (bool);\n'+
'\n'+
'    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n'+
'\n'+
'    event Transfer(address indexed from, address indexed to, uint256 value);\n'+
'\n'+
'    event Approval(address indexed owner, address indexed spender, uint256 value);\n'+
'}\n'+
'\n'+
'\n'+
'\n'+
' \n'+
'library SafeMath {\n'+
'    function add(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'        uint256 c = a + b;\n'+
'        require(c >= a, "SafeMath: addition overflow");\n'+
'\n'+
'        return c;\n'+
'    }\n'+
'\n'+
'    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'        return sub(a, b, "SafeMath: subtraction overflow");\n'+
'    }\n'+
'\n'+
'    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n'+
'        require(b <= a, errorMessage);\n'+
'        uint256 c = a - b;\n'+
'\n'+
'        return c;\n'+
'    }\n'+
'\n'+
'    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'        if (a == 0) {\n'+
'            return 0;\n'+
'        }\n'+
'\n'+
'        uint256 c = a * b;\n'+
'        require(c / a == b, "SafeMath: multiplication overflow");\n'+
'\n'+
'        return c;\n'+
'    }\n'+
'\n'+
'    function div(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'        return div(a, b, "SafeMath: division by zero");\n'+
'    }\n'+
'\n'+
'    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n'+
'        require(b > 0, errorMessage);\n'+
'        uint256 c = a / b;\n'+
'\n'+
'        return c;\n'+
'    }\n'+
'\n'+
'    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\n'+
'        return mod(a, b, "SafeMath: modulo by zero");\n'+
'    }\n'+
'\n'+
'    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n'+
'        require(b != 0, errorMessage);\n'+
'        return a % b;\n'+
'    }\n'+
'}\n'+
'\n'+
'abstract contract Context {\n'+
'    function _msgSender() internal view virtual returns (address payable) {\n'+
'        return msg.sender;\n'+
'    }\n'+
'\n'+
'    function _msgData() internal view virtual returns (bytes memory) {\n'+
'        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691\n'+
'        return msg.data;\n'+
'    }\n'+
'}\n'+
'\n'+
'\n'+
'library Address {\n'+
'    function isContract(address account) internal view returns (bool) {\n'+
'        bytes32 codehash;\n'+
'        bytes32 accountHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;\n'+
'        assembly { codehash := extcodehash(account) }\n'+
'        return (codehash != accountHash && codehash != 0x0);\n'+
'    }\n'+
'\n'+
'    function sendValue(address payable recipient, uint256 amount) internal {\n'+
'        require(address(this).balance >= amount, "Address: insufficient balance");\n'+
'\n'+
'        (bool success, ) = recipient.call{ value: amount }("");\n'+
'        require(success, "Address: unable to send value, recipient may have reverted");\n'+
'    }\n'+
'\n'+
'    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n'+
'      return functionCall(target, data, "Address: low-level call failed");\n'+
'    }\n'+
'\n'+
'    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {\n'+
'        return _functionCallWithValue(target, data, 0, errorMessage);\n'+
'    }\n'+
'\n'+
'    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\n'+
'        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\n'+
'    }\n'+
'\n'+
'    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {\n'+
'        require(address(this).balance >= value, "Address: insufficient balance for call");\n'+
'        return _functionCallWithValue(target, data, value, errorMessage);\n'+
'    }\n'+
'\n'+
'    function _functionCallWithValue(address target, bytes memory data, uint256 weiValue, string memory errorMessage) private returns (bytes memory) {\n'+
'        require(isContract(target), "Address: call to non-contract");\n'+
'\n'+
'        (bool success, bytes memory returndata) = target.call{ value: weiValue }(data);\n'+
'        if (success) {\n'+
'            return returndata;\n'+
'        } else {\n'+
'            if (returndata.length > 0) {\n'+
'\n'+
'                assembly {\n'+
'                    let returndata_size := mload(returndata)\n'+
'                    revert(add(32, returndata), returndata_size)\n'+
'                }\n'+
'            } else {\n'+
'                revert(errorMessage);\n'+
'            }\n'+
'        }\n'+
'    }\n'+
'}\n'+
'\n'+
'contract Ownable is Context {\n'+
'    address private _owner;\n'+
'    address private _previousOwner;\n'+
'    uint256 private _lockTime;\n'+
'\n'+
'    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n'+
'\n'+
'    constructor () internal {\n'+
'        address msgSender = _msgSender();\n'+
'        _owner = msgSender;\n'+
'        emit OwnershipTransferred(address(0), msgSender);\n'+
'    }\n'+
'\n'+
'    function owner() public view returns (address) {\n'+
'        return _owner;\n'+
'    }\n'+
'\n'+
'    modifier onlyOwner() {\n'+
'        require(_owner == _msgSender(), "Ownable: caller is not the owner");\n'+
'        _;\n'+
'    }\n'+
'\n'+
'    function renounceOwnership() public virtual onlyOwner {\n'+
'        emit OwnershipTransferred(_owner, address(0));\n'+
'        _owner = address(0);\n'+
'    }\n'+
'\n'+
'    function transferOwnership(address newOwner) public virtual onlyOwner {\n'+
'        require(newOwner != address(0), "Ownable: new owner is the zero address");\n'+
'        emit OwnershipTransferred(_owner, newOwner);\n'+
'        _owner = newOwner;\n'+
'    }\n'+
'\n'+
'    function geUnlockTime() public view returns (uint256) {\n'+
'        return _lockTime;\n'+
'    }\n'+
'\n'+
'    function lock(uint256 time) public virtual onlyOwner {\n'+
'        _previousOwner = _owner;\n'+
'        _owner = address(0);\n'+
'        _lockTime = now + time;\n'+
'        emit OwnershipTransferred(_owner, address(0));\n'+
'    }\n'+
'    \n'+
'    function unlock() public virtual {\n'+
'        require(_previousOwner == msg.sender, "You dont have permission to unlock");\n'+
'        require(now > _lockTime , "Contract is locked until 7 days");\n'+
'        emit OwnershipTransferred(_owner, _previousOwner);\n'+
'        _owner = _previousOwner;\n'+
'    }\n'+
'}\n'+
'\n'+
'\n'+
'interface IUniswapV2Factory {\n'+
'    event PairCreated(address indexed token0, address indexed token1, address pair, uint);\n'+
'\n'+
'    function feeTo() external view returns (address);\n'+
'    function feeToSetter() external view returns (address);\n'+
'\n'+
'    function getPair(address tokenA, address tokenB) external view returns (address pair);\n'+
'    function allPairs(uint) external view returns (address pair);\n'+
'    function allPairsLength() external view returns (uint);\n'+
'\n'+
'    function createPair(address tokenA, address tokenB) external returns (address pair);\n'+
'\n'+
'    function setFeeTo(address) external;\n'+
'    function setFeeToSetter(address) external;\n'+
'}\n'+
'\n'+
'\n'+
'\n'+
'interface IUniswapV2Pair {\n'+
'    event Approval(address indexed owner, address indexed spender, uint value);\n'+
'    event Transfer(address indexed from, address indexed to, uint value);\n'+
'\n'+
'    function name() external pure returns (string memory);\n'+
'    function symbol() external pure returns (string memory);\n'+
'    function decimals() external pure returns (uint8);\n'+
'    function totalSupply() external view returns (uint);\n'+
'    function balanceOf(address owner) external view returns (uint);\n'+
'    function allowance(address owner, address spender) external view returns (uint);\n'+
'\n'+
'    function approve(address spender, uint value) external returns (bool);\n'+
'    function transfer(address to, uint value) external returns (bool);\n'+
'    function transferFrom(address from, address to, uint value) external returns (bool);\n'+
'\n'+
'    function DOMAIN_SEPARATOR() external view returns (bytes32);\n'+
'    function PERMIT_TYPEHASH() external pure returns (bytes32);\n'+
'    function nonces(address owner) external view returns (uint);\n'+
'\n'+
'    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\n'+
'\n'+
'    event Mint(address indexed sender, uint amount0, uint amount1);\n'+
'    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\n'+
'    event Swap(\n'+
'        address indexed sender,\n'+
'        uint amount0In,\n'+
'        uint amount1In,\n'+
'        uint amount0Out,\n'+
'        uint amount1Out,\n'+
'        address indexed to\n'+
'    );\n'+
'    event Sync(uint112 reserve0, uint112 reserve1);\n'+
'\n'+
'    function MINIMUM_LIQUIDITY() external pure returns (uint);\n'+
'    function factory() external view returns (address);\n'+
'    function token0() external view returns (address);\n'+
'    function token1() external view returns (address);\n'+
'    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\n'+
'    function price0CumulativeLast() external view returns (uint);\n'+
'    function price1CumulativeLast() external view returns (uint);\n'+
'    function kLast() external view returns (uint);\n'+
'\n'+
'    function mint(address to) external returns (uint liquidity);\n'+
'    function burn(address to) external returns (uint amount0, uint amount1);\n'+
'    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\n'+
'    function skim(address to) external;\n'+
'    function sync() external;\n'+
'\n'+
'    function initialize(address, address) external;\n'+
'}\n'+
'\n'+
'\n'+
'interface IUniswapV2Router01 {\n'+
'    function factory() external pure returns (address);\n'+
'    function WETH() external pure returns (address);\n'+
'\n'+
'    function addLiquidity(\n'+
'        address tokenA,\n'+
'        address tokenB,\n'+
'        uint amountADesired,\n'+
'        uint amountBDesired,\n'+
'        uint amountAMin,\n'+
'        uint amountBMin,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external returns (uint amountA, uint amountB, uint liquidity);\n'+
'    function addLiquidityETH(\n'+
'        address token,\n'+
'        uint amountTokenDesired,\n'+
'        uint amountTokenMin,\n'+
'        uint amountETHMin,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);\n'+
'    function removeLiquidity(\n'+
'        address tokenA,\n'+
'        address tokenB,\n'+
'        uint liquidity,\n'+
'        uint amountAMin,\n'+
'        uint amountBMin,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external returns (uint amountA, uint amountB);\n'+
'    function removeLiquidityETH(\n'+
'        address token,\n'+
'        uint liquidity,\n'+
'        uint amountTokenMin,\n'+
'        uint amountETHMin,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external returns (uint amountToken, uint amountETH);\n'+
'    function removeLiquidityWithPermit(\n'+
'        address tokenA,\n'+
'        address tokenB,\n'+
'        uint liquidity,\n'+
'        uint amountAMin,\n'+
'        uint amountBMin,\n'+
'        address to,\n'+
'        uint deadline,\n'+
'        bool approveMax, uint8 v, bytes32 r, bytes32 s\n'+
'    ) external returns (uint amountA, uint amountB);\n'+
'    function removeLiquidityETHWithPermit(\n'+
'        address token,\n'+
'        uint liquidity,\n'+
'        uint amountTokenMin,\n'+
'        uint amountETHMin,\n'+
'        address to,\n'+
'        uint deadline,\n'+
'        bool approveMax, uint8 v, bytes32 r, bytes32 s\n'+
'    ) external returns (uint amountToken, uint amountETH);\n'+
'    function swapExactTokensForTokens(\n'+
'        uint amountIn,\n'+
'        uint amountOutMin,\n'+
'        address[] calldata path,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external returns (uint[] memory amounts);\n'+
'    function swapTokensForExactTokens(\n'+
'        uint amountOut,\n'+
'        uint amountInMax,\n'+
'        address[] calldata path,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external returns (uint[] memory amounts);\n'+
'    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\n'+
'        external\n'+
'        payable\n'+
'        returns (uint[] memory amounts);\n'+
'    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\n'+
'        external\n'+
'        returns (uint[] memory amounts);\n'+
'    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\n'+
'        external\n'+
'        returns (uint[] memory amounts);\n'+
'    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\n'+
'        external\n'+
'        payable\n'+
'        returns (uint[] memory amounts);\n'+
'\n'+
'    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);\n'+
'    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);\n'+
'    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);\n'+
'    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);\n'+
'    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);\n'+
'}\n'+
'\n'+
'\n'+
'\n'+
'\n'+
'interface IUniswapV2Router02 is IUniswapV2Router01 {\n'+
'    function removeLiquidityETHSupportingFeeOnTransferTokens(\n'+
'        address token,\n'+
'        uint liquidity,\n'+
'        uint amountTokenMin,\n'+
'        uint amountETHMin,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external returns (uint amountETH);\n'+
'    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(\n'+
'        address token,\n'+
'        uint liquidity,\n'+
'        uint amountTokenMin,\n'+
'        uint amountETHMin,\n'+
'        address to,\n'+
'        uint deadline,\n'+
'        bool approveMax, uint8 v, bytes32 r, bytes32 s\n'+
'    ) external returns (uint amountETH);\n'+
'\n'+
'    function swapExactTokensForTokensSupportingFeeOnTransferTokens(\n'+
'        uint amountIn,\n'+
'        uint amountOutMin,\n'+
'        address[] calldata path,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external;\n'+
'    function swapExactETHForTokensSupportingFeeOnTransferTokens(\n'+
'        uint amountOutMin,\n'+
'        address[] calldata path,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external payable;\n'+
'    function swapExactTokensForETHSupportingFeeOnTransferTokens(\n'+
'        uint amountIn,\n'+
'        uint amountOutMin,\n'+
'        address[] calldata path,\n'+
'        address to,\n'+
'        uint deadline\n'+
'    ) external;\n'+
'}\n'+
'\n'+
'\n'+
'contract PsuedoCoinTokenBuilder is Context, IERC20, Ownable {\n'+
'    using SafeMath for uint256;\n'+
'    using Address for address;\n'+
'\n'+
'    mapping (address => uint256) private _rOwned;\n'+
'    mapping (address => uint256) private _tOwned;\n'+
'    mapping (address => mapping (address => uint256)) private _allowances;\n'+
'\n'+
'    mapping (address => bool) private _isExcludedFromFee;\n'+
'\n'+
'    mapping (address => bool) private _isExcluded;\n'+
'    address[] private _excluded;\n'+
'   \n'+
'    uint256 private constant MAX = ~uint256(0);\n'+
'    uint256 private _tTotal = tokenNumAmount;\n'+
'    uint256 private _rTotal = (MAX - (MAX % _tTotal));\n'+
'    uint256 private _tFeeTotal;\n'+
'\n'+
'    string private _name = "tokenName";\n'+
'    string private _symbol = "tokenSymbol";\n'+
'    uint8 private _decimals = tokenDecimal;\n'+
'    \n'+
'    uint256 public _taxFee = tokenTax;\n'+
'    uint256 private _previousTaxFee = _taxFee;\n'+
'    \n'+
'    uint256 public _liquidityFee = tokenLiquidity;\n'+
'    uint256 private _previousLiquidityFee = _liquidityFee;\n'+
'\n'+
'    IUniswapV2Router02 public uniswapV2Router;\n'+
'    address public uniswapV2Pair;\n'+
'    \n'+
'    bool inSwapAndLiquify;\n'+
'    bool public swapAndLiquifyEnabled = true;\n'+
'    \n'+
'    uint256 public _maxTxAmount = tokenMaxTxAmount;\n'+
'    uint256 private numTokensSellToAddToLiquidity = tokenSell;\n'+
'    \n'+
'    event MinTokensBeforeSwapUpdated(uint256 minTokensBeforeSwap);\n'+
'    event SwapAndLiquifyEnabledUpdated(bool enabled);\n'+
'    event SwapAndLiquify(\n'+
'        uint256 tokensSwapped,\n'+
'        uint256 ethReceived,\n'+
'        uint256 tokensIntoLiqudity\n'+
'    );\n'+
'    \n'+
'    modifier lockTheSwap {\n'+
'        inSwapAndLiquify = true;\n'+
'        _;\n'+
'        inSwapAndLiquify = false;\n'+
'    }\n'+
'    \n'+
'    constructor () public {\n'+
'        _rOwned[_msgSender()] = _rTotal;\n'+
'        \n'+
'        IUniswapV2Router02 _uniswapV2Router = IUniswapV2Router02(0x10ED43C718714eb63d5aA57B78B54704E256024E);\n'+
'        uniswapV2Pair = IUniswapV2Factory(_uniswapV2Router.factory())\n'+
'            .createPair(address(this), _uniswapV2Router.WETH());\n'+
'\n'+
'        uniswapV2Router = _uniswapV2Router;\n'+
'        \n'+
'        _isExcludedFromFee[owner()] = true;\n'+
'        _isExcludedFromFee[address(this)] = true;\n'+
'        \n'+
'        emit Transfer(address(0), _msgSender(), _tTotal);\n'+
'    }\n'+
'\n'+
'     function setRouterAddress(address newRouter) external onlyOwner {\n'+
'        IUniswapV2Router02 _newRouter = IUniswapV2Router02(newRouter);\n'+
'        address get_pair = IUniswapV2Factory(_newRouter.factory()).getPair(address(this), _newRouter.WETH());\n'+
'        if (get_pair == address(0)) {\n'+
'            uniswapV2Pair = IUniswapV2Factory(_newRouter.factory()).createPair(address(this), _newRouter.WETH());\n'+
'        }\n'+
'        else {\n'+
'            uniswapV2Pair = get_pair;\n'+
'        }\n'+
'        uniswapV2Router = _newRouter;\n'+
'    }\n'+
'\n'+
'    function name() public view returns (string memory) {\n'+
'        return _name;\n'+
'    }\n'+
'\n'+
'    function symbol() public view returns (string memory) {\n'+
'        return _symbol;\n'+
'    }\n'+
'\n'+
'    function decimals() public view returns (uint8) {\n'+
'        return _decimals;\n'+
'    }\n'+
'\n'+
'    function totalSupply() public view override returns (uint256) {\n'+
'        return _tTotal;\n'+
'    }\n'+
'\n'+
'    function balanceOf(address account) public view override returns (uint256) {\n'+
'        if (_isExcluded[account]) return _tOwned[account];\n'+
'        return tokenFromReflection(_rOwned[account]);\n'+
'    }\n'+
'\n'+
'    function transfer(address recipient, uint256 amount) public override returns (bool) {\n'+
'        _transfer(_msgSender(), recipient, amount);\n'+
'        return true;\n'+
'    }\n'+
'\n'+
'    function allowance(address owner, address spender) public view override returns (uint256) {\n'+
'        return _allowances[owner][spender];\n'+
'    }\n'+
'\n'+
'    function approve(address spender, uint256 amount) public override returns (bool) {\n'+
'        _approve(_msgSender(), spender, amount);\n'+
'        return true;\n'+
'    }\n'+
'\n'+
'    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {\n'+
'        _transfer(sender, recipient, amount);\n'+
'        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "ERC20: transfer amount exceeds allowance"));\n'+
'        return true;\n'+
'    }\n'+
'\n'+
'    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\n'+
'        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));\n'+
'        return true;\n'+
'    }\n'+
'\n'+
'    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\n'+
'        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "ERC20: decreased allowance below zero"));\n'+
'        return true;\n'+
'    }\n'+
'\n'+
'    function isExcludedFromReward(address account) public view returns (bool) {\n'+
'        return _isExcluded[account];\n'+
'    }\n'+
'\n'+
'    function totalFees() public view returns (uint256) {\n'+
'        return _tFeeTotal;\n'+
'    }\n'+
'\n'+
'    function deliver(uint256 tAmount) public {\n'+
'        address sender = _msgSender();\n'+
'        require(!_isExcluded[sender], "Excluded addresses cannot call this function");\n'+
'        (uint256 rAmount,,,,,) = _getValues(tAmount);\n'+
'        _rOwned[sender] = _rOwned[sender].sub(rAmount);\n'+
'        _rTotal = _rTotal.sub(rAmount);\n'+
'        _tFeeTotal = _tFeeTotal.add(tAmount);\n'+
'    }\n'+
'\n'+
'    function reflectionFromToken(uint256 tAmount, bool deductTransferFee) public view returns(uint256) {\n'+
'        require(tAmount <= _tTotal, "Amount must be less than supply");\n'+
'        if (!deductTransferFee) {\n'+
'            (uint256 rAmount,,,,,) = _getValues(tAmount);\n'+
'            return rAmount;\n'+
'        } else {\n'+
'            (,uint256 rTransferAmount,,,,) = _getValues(tAmount);\n'+
'            return rTransferAmount;\n'+
'        }\n'+
'    }\n'+
'\n'+
'    function tokenFromReflection(uint256 rAmount) public view returns(uint256) {\n'+
'        require(rAmount <= _rTotal, "Amount must be less than total reflections");\n'+
'        uint256 currentRate =  _getRate();\n'+
'        return rAmount.div(currentRate);\n'+
'    }\n'+
'\n'+
'    function excludeFromReward(address account) public onlyOwner() {\n'+
'        require(!_isExcluded[account], "Account is already excluded");\n'+
'        if(_rOwned[account] > 0) {\n'+
'            _tOwned[account] = tokenFromReflection(_rOwned[account]);\n'+
'        }\n'+
'        _isExcluded[account] = true;\n'+
'        _excluded.push(account);\n'+
'    }\n'+
'\n'+
'    function includeInReward(address account) external onlyOwner() {\n'+
'        require(_isExcluded[account], "Account is already excluded");\n'+
'        for (uint256 i = 0; i < _excluded.length; i++) {\n'+
'            if (_excluded[i] == account) {\n'+
'                _excluded[i] = _excluded[_excluded.length - 1];\n'+
'                _tOwned[account] = 0;\n'+
'                _isExcluded[account] = false;\n'+
'                _excluded.pop();\n'+
'                break;\n'+
'            }\n'+
'        }\n'+
'    }\n'+
'        function _transferBothExcluded(address sender, address recipient, uint256 tAmount) private {\n'+
'        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);\n'+
'        _tOwned[sender] = _tOwned[sender].sub(tAmount);\n'+
'        _rOwned[sender] = _rOwned[sender].sub(rAmount);\n'+
'        _tOwned[recipient] = _tOwned[recipient].add(tTransferAmount);\n'+
'        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);        \n'+
'        _takeLiquidity(tLiquidity);\n'+
'        _reflectFee(rFee, tFee);\n'+
'        emit Transfer(sender, recipient, tTransferAmount);\n'+
'    }\n'+
'    \n'+
'        function excludeFromFee(address account) public onlyOwner {\n'+
'        _isExcludedFromFee[account] = true;\n'+
'    }\n'+
'    \n'+
'    function includeInFee(address account) public onlyOwner {\n'+
'        _isExcludedFromFee[account] = false;\n'+
'    }\n'+
'    \n'+
'    function setTaxFeePercent(uint256 taxFee) external onlyOwner() {\n'+
'        _taxFee = taxFee;\n'+
'    }\n'+
'    \n'+
'    function setLiquidityFeePercent(uint256 liquidityFee) external onlyOwner() {\n'+
'        _liquidityFee = liquidityFee;\n'+
'    }\n'+
'   \n'+
'    function setMaxTxPercent(uint256 maxTxPercent) external onlyOwner() {\n'+
'        _maxTxAmount = _tTotal.mul(maxTxPercent).div(\n'+
'            10**2\n'+
'        );\n'+
'    }\n'+
'\n'+
'    function setSwapAndLiquifyEnabled(bool _enabled) public onlyOwner {\n'+
'        swapAndLiquifyEnabled = _enabled;\n'+
'        emit SwapAndLiquifyEnabledUpdated(_enabled);\n'+
'    }\n'+
'    \n'+
'    receive() external payable {}\n'+
'\n'+
'    function _reflectFee(uint256 rFee, uint256 tFee) private {\n'+
'        _rTotal = _rTotal.sub(rFee);\n'+
'        _tFeeTotal = _tFeeTotal.add(tFee);\n'+
'    }\n'+
'\n'+
'    function _getValues(uint256 tAmount) private view returns (uint256, uint256, uint256, uint256, uint256, uint256) {\n'+
'        (uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getTValues(tAmount);\n'+
'        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee) = _getRValues(tAmount, tFee, tLiquidity, _getRate());\n'+
'        return (rAmount, rTransferAmount, rFee, tTransferAmount, tFee, tLiquidity);\n'+
'    }\n'+
'\n'+
'    function _getTValues(uint256 tAmount) private view returns (uint256, uint256, uint256) {\n'+
'        uint256 tFee = calculateTaxFee(tAmount);\n'+
'        uint256 tLiquidity = calculateLiquidityFee(tAmount);\n'+
'        uint256 tTransferAmount = tAmount.sub(tFee).sub(tLiquidity);\n'+
'        return (tTransferAmount, tFee, tLiquidity);\n'+
'    }\n'+
'\n'+
'    function _getRValues(uint256 tAmount, uint256 tFee, uint256 tLiquidity, uint256 currentRate) private pure returns (uint256, uint256, uint256) {\n'+
'        uint256 rAmount = tAmount.mul(currentRate);\n'+
'        uint256 rFee = tFee.mul(currentRate);\n'+
'        uint256 rLiquidity = tLiquidity.mul(currentRate);\n'+
'        uint256 rTransferAmount = rAmount.sub(rFee).sub(rLiquidity);\n'+
'        return (rAmount, rTransferAmount, rFee);\n'+
'    }\n'+
'\n'+
'    function _getRate() private view returns(uint256) {\n'+
'        (uint256 rSupply, uint256 tSupply) = _getCurrentSupply();\n'+
'        return rSupply.div(tSupply);\n'+
'    }\n'+
'\n'+
'    function _getCurrentSupply() private view returns(uint256, uint256) {\n'+
'        uint256 rSupply = _rTotal;\n'+
'        uint256 tSupply = _tTotal;      \n'+
'        for (uint256 i = 0; i < _excluded.length; i++) {\n'+
'            if (_rOwned[_excluded[i]] > rSupply || _tOwned[_excluded[i]] > tSupply) return (_rTotal, _tTotal);\n'+
'            rSupply = rSupply.sub(_rOwned[_excluded[i]]);\n'+
'            tSupply = tSupply.sub(_tOwned[_excluded[i]]);\n'+
'        }\n'+
'        if (rSupply < _rTotal.div(_tTotal)) return (_rTotal, _tTotal);\n'+
'        return (rSupply, tSupply);\n'+
'    }\n'+
'    \n'+
'    function _takeLiquidity(uint256 tLiquidity) private {\n'+
'        uint256 currentRate =  _getRate();\n'+
'        uint256 rLiquidity = tLiquidity.mul(currentRate);\n'+
'        _rOwned[address(this)] = _rOwned[address(this)].add(rLiquidity);\n'+
'        if(_isExcluded[address(this)])\n'+
'            _tOwned[address(this)] = _tOwned[address(this)].add(tLiquidity);\n'+
'    }\n'+
'    \n'+
'    function calculateTaxFee(uint256 _amount) private view returns (uint256) {\n'+
'        return _amount.mul(_taxFee).div(\n'+
'            10**2\n'+
'        );\n'+
'    }\n'+
'\n'+
'    function calculateLiquidityFee(uint256 _amount) private view returns (uint256) {\n'+
'        return _amount.mul(_liquidityFee).div(\n'+
'            10**2\n'+
'        );\n'+
'    }\n'+
'    \n'+
'    function removeAllFee() private {\n'+
'        if(_taxFee == 0 && _liquidityFee == 0) return;\n'+
'        \n'+
'        _previousTaxFee = _taxFee;\n'+
'        _previousLiquidityFee = _liquidityFee;\n'+
'        \n'+
'        _taxFee = 0;\n'+
'        _liquidityFee = 0;\n'+
'    }\n'+
'    \n'+
'    function restoreAllFee() private {\n'+
'        _taxFee = _previousTaxFee;\n'+
'        _liquidityFee = _previousLiquidityFee;\n'+
'    }\n'+
'    \n'+
'    function isExcludedFromFee(address account) public view returns(bool) {\n'+
'        return _isExcludedFromFee[account];\n'+
'    }\n'+
'\n'+
'    function _approve(address owner, address spender, uint256 amount) private {\n'+
'        require(owner != address(0), "ERC20: approve from the zero address");\n'+
'        require(spender != address(0), "ERC20: approve to the zero address");\n'+
'\n'+
'        _allowances[owner][spender] = amount;\n'+
'        emit Approval(owner, spender, amount);\n'+
'    }\n'+
'\n'+
'    function _transfer(\n'+
'        address from,\n'+
'        address to,\n'+
'        uint256 amount\n'+
'    ) private {\n'+
'        require(from != address(0), "ERC20: transfer from the zero address");\n'+
'        require(to != address(0), "ERC20: transfer to the zero address");\n'+
'        require(amount > 0, "Transfer amount must be greater than zero");\n'+
'        if(from != owner() && to != owner())\n'+
'            require(amount <= _maxTxAmount, "Transfer amount exceeds the maxTxAmount.");\n'+
'\n'+
'        uint256 contractTokenBalance = balanceOf(address(this));\n'+
'        \n'+
'        if(contractTokenBalance >= _maxTxAmount)\n'+
'        {\n'+
'            contractTokenBalance = _maxTxAmount;\n'+
'        }\n'+
'        \n'+
'        bool overMinTokenBalance = contractTokenBalance >= numTokensSellToAddToLiquidity;\n'+
'        if (\n'+
'            overMinTokenBalance &&\n'+
'            !inSwapAndLiquify &&\n'+
'            from != uniswapV2Pair &&\n'+
'            swapAndLiquifyEnabled\n'+
'        ) {\n'+
'            contractTokenBalance = numTokensSellToAddToLiquidity;\n'+
'            swapAndLiquify(contractTokenBalance);\n'+
'        }\n'+
'        \n'+
'        bool takeFee = true;\n'+
'        \n'+
'        if(_isExcludedFromFee[from] || _isExcludedFromFee[to]){\n'+
'            takeFee = false;\n'+
'        }\n'+
'        \n'+
'        _tokenTransfer(from,to,amount,takeFee);\n'+
'    }\n'+
'\n'+
'    function swapAndLiquify(uint256 contractTokenBalance) private lockTheSwap {\n'+
'        uint256 half = contractTokenBalance.div(2);\n'+
'        uint256 otherHalf = contractTokenBalance.sub(half);\n'+
'\n'+
'        uint256 initialBalance = address(this).balance;\n'+
'\n'+
'        swapTokensForEth(half); // <- this breaks the ETH -> HATE swap when swap+liquify is triggered\n'+
'\n'+
'        uint256 newBalance = address(this).balance.sub(initialBalance);\n'+
'\n'+
'        addLiquidity(otherHalf, newBalance);\n'+
'        \n'+
'        emit SwapAndLiquify(half, newBalance, otherHalf);\n'+
'    }\n'+
'\n'+
'    function swapTokensForEth(uint256 tokenAmount) private {\n'+
'        address[] memory path = new address[](2);\n'+
'        path[0] = address(this);\n'+
'        path[1] = uniswapV2Router.WETH();\n'+
'\n'+
'        _approve(address(this), address(uniswapV2Router), tokenAmount);\n'+
'\n'+
'        uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(\n'+
'            tokenAmount,\n'+
'            0, // accept any amount of ETH\n'+
'            path,\n'+
'            address(this),\n'+
'            block.timestamp\n'+
'        );\n'+
'    }\n'+
'\n'+
'    function addLiquidity(uint256 tokenAmount, uint256 ethAmount) private {\n'+
'        _approve(address(this), address(uniswapV2Router), tokenAmount);\n'+
'\n'+
'        uniswapV2Router.addLiquidityETH{value: ethAmount}(\n'+
'            address(this),\n'+
'            tokenAmount,\n'+
'            0, // slippage is unavoidable\n'+
'            0, // slippage is unavoidable\n'+
'            owner(),\n'+
'            block.timestamp\n'+
'        );\n'+
'    }\n'+
'\n'+
'    function _tokenTransfer(address sender, address recipient, uint256 amount,bool takeFee) private {\n'+
'        if(!takeFee)\n'+
'            removeAllFee();\n'+
'        \n'+
'        if (_isExcluded[sender] && !_isExcluded[recipient]) {\n'+
'            _transferFromExcluded(sender, recipient, amount);\n'+
'        } else if (!_isExcluded[sender] && _isExcluded[recipient]) {\n'+
'            _transferToExcluded(sender, recipient, amount);\n'+
'        } else if (!_isExcluded[sender] && !_isExcluded[recipient]) {\n'+
'            _transferStandard(sender, recipient, amount);\n'+
'        } else if (_isExcluded[sender] && _isExcluded[recipient]) {\n'+
'            _transferBothExcluded(sender, recipient, amount);\n'+
'        } else {\n'+
'            _transferStandard(sender, recipient, amount);\n'+
'        }\n'+
'        \n'+
'        if(!takeFee)\n'+
'            restoreAllFee();\n'+
'    }\n'+
'\n'+
'    function _transferStandard(address sender, address recipient, uint256 tAmount) private {\n'+
'        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);\n'+
'        _rOwned[sender] = _rOwned[sender].sub(rAmount);\n'+
'        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);\n'+
'        _takeLiquidity(tLiquidity);\n'+
'        _reflectFee(rFee, tFee);\n'+
'        emit Transfer(sender, recipient, tTransferAmount);\n'+
'    }\n'+
'\n'+
'    function _transferToExcluded(address sender, address recipient, uint256 tAmount) private {\n'+
'        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);\n'+
'        _rOwned[sender] = _rOwned[sender].sub(rAmount);\n'+
'        _tOwned[recipient] = _tOwned[recipient].add(tTransferAmount);\n'+
'        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);           \n'+
'        _takeLiquidity(tLiquidity);\n'+
'        _reflectFee(rFee, tFee);\n'+
'        emit Transfer(sender, recipient, tTransferAmount);\n'+
'    }\n'+
'\n'+
'    function _transferFromExcluded(address sender, address recipient, uint256 tAmount) private {\n'+
'        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);\n'+
'        _tOwned[sender] = _tOwned[sender].sub(tAmount);\n'+
'        _rOwned[sender] = _rOwned[sender].sub(rAmount);\n'+
'        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);   \n'+
'        _takeLiquidity(tLiquidity);\n'+
'        _reflectFee(rFee, tFee);\n'+
'        emit Transfer(sender, recipient, tTransferAmount);\n'+
'    }\n'+
'    \n'+
'}\n'+
';';

export const Templates = {
    SafeMoonClone : {
        name: "Custom Safemoon Clone",
        code: safemoonCode
    },
    SimpleToken : {
        name: "Simple Token",
        code: simpleTokenCode
    }
}
