package simulation

import (
	"math/rand"

	"blognitum/x/blognitum/keeper"
	"blognitum/x/blognitum/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgDeleteComment(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgDeleteComment{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the DeleteComment simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "DeleteComment simulation not implemented"), nil, nil
	}
}
