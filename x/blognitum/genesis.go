package blognitum

import (
	"blognitum/x/blognitum/keeper"
	"blognitum/x/blognitum/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the comment
	for _, elem := range genState.CommentList {
		k.SetComment(ctx, elem)
	}

	// Set comment count
	k.SetCommentCount(ctx, genState.CommentCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CommentList = k.GetAllComment(ctx)
	genesis.CommentCount = k.GetCommentCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
